import React from 'react'
import { Query, Mutation } from 'react-apollo'
import RepositoryList from '../Repository/index1'
import Loading from '../Loading'
import ErrorMessage from '../Error'
import {GET_PRODUCTS} from '../graphql/GET_PRODUCTS'
import MutationCheckoutCreate from '../graphql/MutationCheckoutCreate'


const Profile = () => (
  <>
  <Query query={GET_PRODUCTS}>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />
      }
      if (loading || !data) {
        return <Loading />
      }

      return <RepositoryList products={data.products} />
    }}
  </Query>
        <Mutation mutation={MutationCheckoutCreate}>
        {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />
      }
      if (loading || !data) {
        return <Loading />
      }

      return (
        <div>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
        </div>
      )
    }}
          </Mutation>
        </>
)

export default Profile
