import { gql } from 'graphql-tag'

import { FragmentCheckout } from '../Repository/index1'
import { FragmentCheckoutUserError } from './FragmentCheckoutUserError'
import { FragmentUserError } from './FragmentUserError'

const MutationCheckoutCreate = gql`
  mutation($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        ...FragmentUserError
      }
      checkoutUserErrors {
        ...FragmentCheckoutUserError
      }
      checkout {
        ...FragmentCheckout
      }
    }
  }

  ${FragmentCheckout}
  ${FragmentCheckoutUserError}
  ${FragmentUserError}
`
export default MutationCheckoutCreate