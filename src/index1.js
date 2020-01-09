import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App/index1'
import './style.css'

const SHOPIFY_BASE_URL = `https://dev-store9.myshopify.com/api/graphql`

const httpLink = new HttpLink({
  uri: SHOPIFY_BASE_URL,
  headers: {
    'X-Shopify-Storefront-Access-Token': `${process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN}`,
  },
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

/* ReactDOM.render(
    <App />,
  document.getElementById('root')
) */