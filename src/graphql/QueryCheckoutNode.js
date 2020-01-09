import { gql } from 'graphql-tag'

import { FragmentCheckout } from './FragmentCheckout'

export const QueryCheckoutNode = gql`
  query($id: ID!) {
    node(id: $id) {
      ...FragmentCheckout
    }
  }

  ${FragmentCheckout}
`
