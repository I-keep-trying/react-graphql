import { gql } from 'graphql-tag'

import { FragmentCustomerAccessToken } from './FragmentCustomerAccessToken'
import { FragmentUserError } from './FragmentUserError'

export const MutationCustomerAccessTokenRenew = gql`
  mutation($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      userErrors {
        ...FragmentUserError
      }
      customerAccessToken {
        ...FragmentCustomerAccessToken
      }
    }
  }

  ${FragmentCustomerAccessToken}
  ${FragmentUserError}
`
