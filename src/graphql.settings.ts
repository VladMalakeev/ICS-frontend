import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if(process.env.REACT_APP_MODE === 'dev'){
      if (graphQLErrors ){
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
  
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }
    forward(operation);
  });

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL
  })

  const link = ApolloLink.from([errorLink, httpLink]);

  export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    
  });
