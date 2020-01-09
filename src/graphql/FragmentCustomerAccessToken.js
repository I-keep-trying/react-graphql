import { gql } from 'graphql-tag'

export const FragmentCustomerAccessToken = gql`
  fragment FragmentCustomerAccessToken on CustomerAccessToken {
    accessToken
    expiresAt
  }
`
