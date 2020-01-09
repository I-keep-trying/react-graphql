import { gql } from 'graphql-tag'

import { FragmentCollection } from './FragmentCollection'
import { FragmentCollectionsProducts } from './FragmentCollectionsProducts'

export const QueryCollectionByHandle = gql`
  query($handle: String!) {
    collectionByHandle(handle: $handle) {
      ...CollectionFragment
      ...CollectionsProductsFragment
    }
  }

  ${FragmentCollection}
  ${FragmentCollectionsProducts}
`
