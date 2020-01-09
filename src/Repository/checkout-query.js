import gql from 'graphql-tag'

const CHECKOUT = gql`
  mutation {
    checkoutCreate(
      input: {
        lineItems: [
          { variantId: "gid://shopify/Product/4195639328849", quantity: 1 }
        ]
      }
    ) {
      checkout {
        id
        webUrl
        lineItems(first: 5) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
`

export default CHECKOUT
