export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: number; output: number; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: string; output: string; }
  DateTimeISO: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: string; output: string; }
  GUID: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: string; output: string; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: number; output: number; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: number; output: number; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: number; output: number; }
  PositiveInt: { input: number; output: number; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SESSN: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: string; output: string; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type ICreateCustomerInput = {
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type ICreateDeliveryInput = {
  address: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  deliveryProducts: Array<IDeliveryProductsInput>;
  lat: Scalars['Float']['input'];
  long: Scalars['Float']['input'];
  total: Scalars['Int']['input'];
};

export type ICreateDriverInput = {
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ICreateProductInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type ICustomer = {
  __typename?: 'Customer';
  createdAt: Scalars['DateTime']['output'];
  deliveryCustomers: Array<IDeliveryCustomer>;
  id: Scalars['ID']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IDelivery = {
  __typename?: 'Delivery';
  DeliveryCustomer: Maybe<IDeliveryCustomer>;
  DeliveryDriverPackList: Maybe<IDeliveryDriverPackList>;
  DeliveryProducts: Maybe<Array<Maybe<IDeliveryProduct>>>;
  DeliveryStatus: Maybe<IDeliveryStatus>;
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lat: Scalars['Float']['output'];
  long: Scalars['Float']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IDeliveryCustomer = {
  __typename?: 'DeliveryCustomer';
  createdAt: Scalars['DateTime']['output'];
  customer: ICustomer;
  delivery: IDelivery;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IDeliveryDriverPack = {
  __typename?: 'DeliveryDriverPack';
  createdAt: Scalars['DateTime']['output'];
  deliveryDriverPackList: Array<IDeliveryDriverPackList>;
  driver: IDriver;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IDeliveryDriverPackList = {
  __typename?: 'DeliveryDriverPackList';
  createdAt: Scalars['DateTime']['output'];
  delivery: IDelivery;
  deliveryDriverPack: IDeliveryDriverPack;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IDeliveryProduct = {
  __typename?: 'DeliveryProduct';
  createdAt: Scalars['DateTime']['output'];
  delivery: IDelivery;
  id: Scalars['ID']['output'];
  product: IProduct;
  updatedAt: Scalars['DateTime']['output'];
};

export type IDeliveryProductsInput = {
  currentProductValue: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};

export type IDeliveryStatus = {
  __typename?: 'DeliveryStatus';
  createdAt: Scalars['DateTime']['output'];
  delivery: IDelivery;
  id: Scalars['ID']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type IDriver = {
  __typename?: 'Driver';
  createdAt: Scalars['DateTime']['output'];
  deliveryDriverPacks: Array<IDeliveryDriverPack>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createCustomer: ICustomer;
  createDelivery: IDelivery;
  createDriver: IDriver;
  createProduct: IProduct;
  deleteCustomer: ICustomer;
  deleteDelivery: IDelivery;
  deleteDriver: IDriver;
  deleteProduct: IProduct;
  updateCustomer: ICustomer;
  updateDelivery: IDelivery;
  updateDriver: IDriver;
  updateProduct: IProduct;
};


export type IMutationCreateCustomerArgs = {
  data: ICreateCustomerInput;
};


export type IMutationCreateDeliveryArgs = {
  data: ICreateDeliveryInput;
};


export type IMutationCreateDriverArgs = {
  data: ICreateDriverInput;
};


export type IMutationCreateProductArgs = {
  data: ICreateProductInput;
};


export type IMutationDeleteCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteDriverArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationUpdateCustomerArgs = {
  data: IUpdateCustomerInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateDeliveryArgs = {
  data: IUpdateDeliveryInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateDriverArgs = {
  data: IUpdateDriverInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateProductArgs = {
  data: IUpdateProductInput;
  id: Scalars['ID']['input'];
};

export type IProduct = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime']['output'];
  deliveryProducts: Array<IDeliveryProduct>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IQuery = {
  __typename?: 'Query';
  customer: Maybe<ICustomer>;
  customers: Array<ICustomer>;
  deliveries: Array<IDelivery>;
  delivery: Maybe<IDelivery>;
  driver: Maybe<IDriver>;
  drivers: Array<IDriver>;
  hello: Maybe<Scalars['String']['output']>;
  product: Maybe<IProduct>;
  products: Array<IProduct>;
};


export type IQueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryDriverArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryHelloArgs = {
  input: InputMaybe<IHello>;
};


export type IQueryProductArgs = {
  id: Scalars['ID']['input'];
};

export enum Status {
  Delivered = 'DELIVERED',
  Process = 'PROCESS',
  Shipped = 'SHIPPED'
}

export type IUpdateCustomerInput = {
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type IUpdateDeliveryInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  long?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type IUpdateDriverInput = {
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type IUpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type IHello = {
  name?: InputMaybe<Scalars['String']['input']>;
};
