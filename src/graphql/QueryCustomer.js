import { gql } from 'graphql-tag'

import { FragmentCustomer } from './FragmentCustomer'

export const QueryCustomer = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...FragmentCustomer
    }
  }

  ${FragmentCustomer}
`
