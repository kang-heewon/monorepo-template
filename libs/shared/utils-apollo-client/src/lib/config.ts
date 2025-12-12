export interface ApolloClientConfig {
  uri: string;
  getAuthToken?: () => string | null | Promise<string | null>;
}
