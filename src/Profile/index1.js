import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RepositoryList from '../Repository/index1'
import Loading from '../Loading'

const GET_PRODUCTS = gql`
  {
     products (first: 10) {
    edges {
      node {
        id
        title
        description
        images (first: 3) {
          edges {
            node {
              id
              originalSrc
            }
          }
        }
        variants (first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  } 
  }
`

const Profile = () => (
  <Query query={GET_PRODUCTS}>
    {({ data, loading }) => {
      if (loading || !data) {
        return <Loading />
      }

      return <RepositoryList repositories={data.products} />/* (
        <div>
        {data.products.title} 
      </div>
      ) */
     
    }}
    </Query>
)

export default Profile
