import { gql } from 'graphql-tag'

export const FragmentCustomerUserError = gql`
  fragment FragmentCustomerUserError on CustomerUserError {
    field
    message
    code
  }
`
