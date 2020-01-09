import React from 'react'
import RepositoryItem from '../RepositoryItem/index1'
import '../style.css'

const RepositoryList = ({ products }) =>
products.edges.map(({ node }) => (
    <div key={node.id} className="RepositoryItem">
      <RepositoryItem {...node} />
    </div>
  )).flat()

export default RepositoryList
