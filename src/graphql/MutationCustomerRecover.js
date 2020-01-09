import { gql } from 'graphql-tag'

import { FragmentCustomerUserError } from './FragmentCustomerUserError'
import { FragmentUserError } from './FragmentUserError'

export const MutationCustomerRecover = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      userErrors {
        ...FragmentUserError
      }
      customerUserErrors {
        ...FragmentCustomerUserError
      }
    }
  }

  ${FragmentCustomerUserError}
  ${FragmentUserError}
`
