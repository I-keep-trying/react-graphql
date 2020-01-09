import { gql } from 'graphql-tag'

import { FragmentProductVariant } from './FragmentProductVariant'

export const QueryProductVariantNodes = gql`
  query($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...FragmentProductVariant
    }
  }

  ${FragmentProductVariant}
`
