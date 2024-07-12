import { useMemo } from "react";

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient as createWsClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "cookies-next";
import { getAuthenticationToken } from "@/utils/cookies";

let graphQLClient: ApolloClient<NormalizedCacheObject> | undefined;

const apiUrl = `${process.env.NEXT_PUBLIC_URL_API_BACKEND}/graphql`;
const isServer = typeof window === "undefined";

const httpLink = new HttpLink({
  uri: apiUrl,
});

const wsLink = isServer
  ? undefined
  : new GraphQLWsLink(
      createWsClient({
        url: apiUrl?.replace(/(http)(s)?:\/\//, "ws$2://"),
        connectionParams: {
          headers: {
            authorization: getCookie("Authentication")?.toString(),
          },
        },
      })
    );

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = getCookie("Authentication")?.toString();
  // const token = getAuthenticationToken();
  const token = await getAuthenticationToken();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ?? "",
    },
  };
});
// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = isServer
  ? httpLink
  : split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind !== "OperationDefinition" ||
          definition.operation !== "subscription"
        );
      },
      httpLink,
      wsLink
    );

const createClient = (initialState: NormalizedCacheObject | null) => {
  let cache = new InMemoryCache();
  if (initialState) {
    cache = cache.restore(initialState);
  }
  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: isServer,
    link: authLink.concat(splitLink),
    cache,
  });
};

export const initializeGraphQL = (
  initialState: NormalizedCacheObject | null = null
) => {
  const _graphQLClient = graphQLClient ?? createClient(initialState);

  // After navigating to a page with an initial GraphQL state, create a new
  // cache with the current state merged with the incoming state and set it to
  // the GraphQL client. This is necessary because the initial state of
  // `memCache` can only be set once
  if (initialState && graphQLClient) {
    graphQLClient.restore(initialState);
  }

  // For SSG and SSR always create a new GraphQL Client
  if (typeof window === "undefined") {
    return _graphQLClient;
  }

  // Create the GraphQL Client once in the client
  if (!graphQLClient) {
    graphQLClient = _graphQLClient;
  }

  return _graphQLClient;
};

export const useGraphQLClient = (
  initialState: NormalizedCacheObject | null
) => {
  const store = useMemo(() => initializeGraphQL(initialState), [initialState]);
  return store;
};
