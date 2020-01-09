import { gql } from 'graphql-tag'

export const QueryShopPolicy = gql`
  fragment FragmentPolicy on ShopPolicy {
    id
    title
    url
    body
  }

  query {
    shop {
      privacyPolicy {
        ...FragmentPolicy
      }
      termsOfService {
        ...FragmentPolicy
      }
      refundPolicy {
        ...FragmentPolicy
      }
    }
  }
`
