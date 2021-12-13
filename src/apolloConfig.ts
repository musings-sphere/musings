import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

const client = new ApolloClient({
	uri: API_URL,
	cache: new InMemoryCache(),
});

export default client;
