import React from 'react'
import { Query } from 'react-apollo'

import RepositoryList from '../Repository'
import Loading from '../Loading'
import ErrorMessage from '../Error'
import {GET_REPOSITORIES_OF_CURRENT_USER} from '../graphql/GET_REPOSITORIES_OF_CURRENT_USER'


const Profile = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading, error, fetchMore }) => {
      if (error) {
        return <ErrorMessage error={error} />
      }

      if (loading || !data) {
        return <Loading />
      }

      return (
        <RepositoryList
          repositories={data.viewer.repositories}
          fetchMore={fetchMore}
        />
      )
    }}
  </Query>
)

export default Profile
