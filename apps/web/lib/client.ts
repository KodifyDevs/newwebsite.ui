import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {POSTS_GRAPHQL_ENDPOINT_URL } from "../app/config";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:POSTS_GRAPHQL_ENDPOINT_URL,
    }),
  });
});