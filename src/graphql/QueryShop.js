import { gql } from 'graphql-tag'

export const QueryShop = gql`
  query {
    shop {
      currencyCode
      description
      moneyFormat
      name
      primaryDomain {
        host
        sslEnabled
        url
      }
    }
  }
`
