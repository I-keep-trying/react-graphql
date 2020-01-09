import { gql } from 'graphql-tag'

import { FragmentProduct } from './FragmentProduct'

export const QueryProductByHandle = gql`
  query($handle: String!) {
    productByHandle(handle: $handle) {
      ...FragmentProduct
    }
  }

  ${FragmentProduct}
`
