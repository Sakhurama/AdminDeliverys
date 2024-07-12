import type * as Types from './types.generated';

export type ICreateProductMutationVariables = Types.Exact<{
  data: Types.ICreateProductInput;
}>;


export type ICreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Types.IProduct, 'description' | 'id' | 'name' | 'updatedAt' | 'createdAt'>
  ) }
);

export type IProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Types.IProduct, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  )> }
);
