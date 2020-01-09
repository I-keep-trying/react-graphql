import gql from 'graphql-tag'
import { PRODUCT_FRAGMENT } from '../Repository/index1'

export const GET_PRODUCTS = gql`
  {
    products(first: 10) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`
