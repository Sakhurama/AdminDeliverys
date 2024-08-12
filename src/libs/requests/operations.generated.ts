import type * as Types from './types.generated';

export type IDashboardAuthMutationVariables = Types.Exact<{
  input: Types.ICredentialsInput;
}>;


export type IDashboardAuthMutation = (
  { __typename?: 'Mutation' }
  & { dashboardAuth: Types.Maybe<(
    { __typename?: 'AuthResponse' }
    & Pick<Types.IAuthResponse, 'token'>
  )> }
);

export type ICreateCustomerMutationVariables = Types.Exact<{
  data: Types.ICreateCustomerInput;
}>;


export type ICreateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createCustomer: (
    { __typename?: 'Customer' }
    & Pick<Types.ICustomer, 'id' | 'name' | 'lastName' | 'phone'>
  ) }
);

export type ICustomersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ICustomersQuery = (
  { __typename?: 'Query' }
  & { customers: Array<(
    { __typename?: 'Customer' }
    & Pick<Types.ICustomer, 'id' | 'lastName' | 'name' | 'phone' | 'updatedAt' | 'createdAt'>
  )> }
);

export type ICreateDeliveryMutationVariables = Types.Exact<{
  data: Types.ICreateDeliveryInput;
}>;


export type ICreateDeliveryMutation = (
  { __typename?: 'Mutation' }
  & { createDelivery: (
    { __typename?: 'Delivery' }
    & Pick<Types.IDelivery, 'address' | 'id' | 'lat' | 'long' | 'total'>
    & { DeliveryCustomer: Types.Maybe<(
      { __typename?: 'DeliveryCustomer' }
      & Pick<Types.IDeliveryCustomer, 'id'>
    )>, DeliveryProducts: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'DeliveryProduct' }
      & Pick<Types.IDeliveryProduct, 'id'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Types.IProduct, 'id' | 'name'>
      ) }
    )>>> }
  ) }
);

export type ICreateDriverMutationVariables = Types.Exact<{
  data: Types.ICreateDriverInput;
}>;


export type ICreateDriverMutation = (
  { __typename?: 'Mutation' }
  & { createDriver: (
    { __typename?: 'Driver' }
    & Pick<Types.IDriver, 'id' | 'name' | 'lastName' | 'phone'>
  ) }
);

export type IDriversQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IDriversQuery = (
  { __typename?: 'Query' }
  & { drivers: Array<(
    { __typename?: 'Driver' }
    & Pick<Types.IDriver, 'id' | 'name' | 'lastName' | 'phone' | 'updatedAt' | 'createdAt'>
  )> }
);

export type ICreateProductMutationVariables = Types.Exact<{
  data: Types.ICreateProductInput;
}>;


export type ICreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Types.IProduct, 'id' | 'name' | 'image' | 'description' | 'updatedAt' | 'createdAt'>
    & { ProductPrice: Array<(
      { __typename?: 'ProductPrice' }
      & Pick<Types.IProductPrice, 'value'>
    )> }
  ) }
);

export type IProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Types.IProduct, 'id' | 'name' | 'image' | 'description' | 'createdAt' | 'updatedAt'>
    & { ProductPrice: Array<(
      { __typename?: 'ProductPrice' }
      & Pick<Types.IProductPrice, 'value'>
    )> }
  )> }
);
