import { gql } from 'graphql-tag'

import { FragmentProductVariant } from './FragmentProductVariant'

export const QueryProductVariantNode = gql`
  query($id: ID!) {
    node(id: $id) {
      ...FragmentProductVariant
    }
  }

  ${FragmentProductVariant}
`
