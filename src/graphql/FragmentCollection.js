import { gql } from 'graphql-tag'

export const FragmentCollection = gql`
  fragment FragmentCollection on Collection {
    id
    handle
    description
    descriptionHtml
    updatedAt
    title
    image {
      id
      src: originalSrc
      altText
    }
  }
`
