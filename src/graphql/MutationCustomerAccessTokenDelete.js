import { gql } from 'graphql-tag'

import { FragmentUserError } from './FragmentUserError'

export const MutationCustomerAccessTokenDelete = gql`
  mutation($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      userErrors {
        ...FragmentUserError
      }
      deletedAccessToken
      deletedCustomerAccessTokenId
    }
  }

  ${FragmentUserError}
`
