import { gql } from 'graphql-tag'

import { FragmentCustomerAccessToken } from './FragmentCustomerAccessToken'
import { FragmentCustomerUserError } from './FragmentCustomerUserError'
import { FragmentUserError } from './FragmentUserError'

export const MutationCustomerAccessTokenCreate = gql`
  mutation($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        ...FragmentUserError
      }
      customerAccessToken {
        ...FragmentCustomerAccessToken
      }
      customerUserErrors {
        ...FragmentCustomerUserError
      }
    }
  }

  ${FragmentCustomerAccessToken}
  ${FragmentCustomerUserError}
  ${FragmentUserError}
`
