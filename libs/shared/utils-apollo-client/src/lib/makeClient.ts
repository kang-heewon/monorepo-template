import { HttpLink } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import { ApolloClientConfig } from './config';

export function makeClient(config: ApolloClientConfig) {
  const httpLink = new HttpLink({
    uri: config.uri,
  });

  const authLink = new SetContextLink(async prevContext => {
    if (!config.getAuthToken) {
      return prevContext;
    }

    const token = await config.getAuthToken();

    return {
      ...prevContext,
      headers: {
        ...prevContext.headers,
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
}
