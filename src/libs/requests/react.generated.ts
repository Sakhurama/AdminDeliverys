import type * as Types from './operations.generated';

import * as Operations from './nodes.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export type IDashboardAuthMutationFn = Apollo.MutationFunction<Types.IDashboardAuthMutation, Types.IDashboardAuthMutationVariables>;

/**
 * __useDashboardAuthMutation__
 *
 * To run a mutation, you first call `useDashboardAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDashboardAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dashboardAuthMutation, { data, loading, error }] = useDashboardAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDashboardAuthMutation(baseOptions?: Apollo.MutationHookOptions<Types.IDashboardAuthMutation, Types.IDashboardAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.IDashboardAuthMutation, Types.IDashboardAuthMutationVariables>(Operations.DashboardAuth, options);
      }
export type DashboardAuthMutationHookResult = ReturnType<typeof useDashboardAuthMutation>;
export type DashboardAuthMutationResult = Apollo.MutationResult<Types.IDashboardAuthMutation>;
export type DashboardAuthMutationOptions = Apollo.BaseMutationOptions<Types.IDashboardAuthMutation, Types.IDashboardAuthMutationVariables>;
export type ICreateCustomerMutationFn = Apollo.MutationFunction<Types.ICreateCustomerMutation, Types.ICreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<Types.ICreateCustomerMutation, Types.ICreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ICreateCustomerMutation, Types.ICreateCustomerMutationVariables>(Operations.CreateCustomer, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<Types.ICreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<Types.ICreateCustomerMutation, Types.ICreateCustomerMutationVariables>;

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomersQuery(baseOptions?: Apollo.QueryHookOptions<Types.ICustomersQuery, Types.ICustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.ICustomersQuery, Types.ICustomersQueryVariables>(Operations.Customers, options);
      }
export function useCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.ICustomersQuery, Types.ICustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.ICustomersQuery, Types.ICustomersQueryVariables>(Operations.Customers, options);
        }
export function useCustomersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Types.ICustomersQuery, Types.ICustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Types.ICustomersQuery, Types.ICustomersQueryVariables>(Operations.Customers, options);
        }
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<typeof useCustomersLazyQuery>;
export type CustomersSuspenseQueryHookResult = ReturnType<typeof useCustomersSuspenseQuery>;
export type CustomersQueryResult = Apollo.QueryResult<Types.ICustomersQuery, Types.ICustomersQueryVariables>;
export type ICreateDeliveryMutationFn = Apollo.MutationFunction<Types.ICreateDeliveryMutation, Types.ICreateDeliveryMutationVariables>;

/**
 * __useCreateDeliveryMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryMutation, { data, loading, error }] = useCreateDeliveryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDeliveryMutation(baseOptions?: Apollo.MutationHookOptions<Types.ICreateDeliveryMutation, Types.ICreateDeliveryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ICreateDeliveryMutation, Types.ICreateDeliveryMutationVariables>(Operations.CreateDelivery, options);
      }
export type CreateDeliveryMutationHookResult = ReturnType<typeof useCreateDeliveryMutation>;
export type CreateDeliveryMutationResult = Apollo.MutationResult<Types.ICreateDeliveryMutation>;
export type CreateDeliveryMutationOptions = Apollo.BaseMutationOptions<Types.ICreateDeliveryMutation, Types.ICreateDeliveryMutationVariables>;
export type ICreateDriverMutationFn = Apollo.MutationFunction<Types.ICreateDriverMutation, Types.ICreateDriverMutationVariables>;

/**
 * __useCreateDriverMutation__
 *
 * To run a mutation, you first call `useCreateDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDriverMutation, { data, loading, error }] = useCreateDriverMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDriverMutation(baseOptions?: Apollo.MutationHookOptions<Types.ICreateDriverMutation, Types.ICreateDriverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ICreateDriverMutation, Types.ICreateDriverMutationVariables>(Operations.CreateDriver, options);
      }
export type CreateDriverMutationHookResult = ReturnType<typeof useCreateDriverMutation>;
export type CreateDriverMutationResult = Apollo.MutationResult<Types.ICreateDriverMutation>;
export type CreateDriverMutationOptions = Apollo.BaseMutationOptions<Types.ICreateDriverMutation, Types.ICreateDriverMutationVariables>;

/**
 * __useDriversQuery__
 *
 * To run a query within a React component, call `useDriversQuery` and pass it any options that fit your needs.
 * When your component renders, `useDriversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDriversQuery({
 *   variables: {
 *   },
 * });
 */
export function useDriversQuery(baseOptions?: Apollo.QueryHookOptions<Types.IDriversQuery, Types.IDriversQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.IDriversQuery, Types.IDriversQueryVariables>(Operations.Drivers, options);
      }
export function useDriversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.IDriversQuery, Types.IDriversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.IDriversQuery, Types.IDriversQueryVariables>(Operations.Drivers, options);
        }
export function useDriversSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Types.IDriversQuery, Types.IDriversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Types.IDriversQuery, Types.IDriversQueryVariables>(Operations.Drivers, options);
        }
export type DriversQueryHookResult = ReturnType<typeof useDriversQuery>;
export type DriversLazyQueryHookResult = ReturnType<typeof useDriversLazyQuery>;
export type DriversSuspenseQueryHookResult = ReturnType<typeof useDriversSuspenseQuery>;
export type DriversQueryResult = Apollo.QueryResult<Types.IDriversQuery, Types.IDriversQueryVariables>;
export type ICreateProductMutationFn = Apollo.MutationFunction<Types.ICreateProductMutation, Types.ICreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<Types.ICreateProductMutation, Types.ICreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ICreateProductMutation, Types.ICreateProductMutationVariables>(Operations.CreateProduct, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<Types.ICreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<Types.ICreateProductMutation, Types.ICreateProductMutationVariables>;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<Types.IProductsQuery, Types.IProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.IProductsQuery, Types.IProductsQueryVariables>(Operations.Products, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.IProductsQuery, Types.IProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.IProductsQuery, Types.IProductsQueryVariables>(Operations.Products, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Types.IProductsQuery, Types.IProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Types.IProductsQuery, Types.IProductsQueryVariables>(Operations.Products, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<Types.IProductsQuery, Types.IProductsQueryVariables>;