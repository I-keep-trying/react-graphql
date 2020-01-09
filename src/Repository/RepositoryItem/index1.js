import React from 'react'
import { Mutation } from 'react-apollo';
import PRODUCT_FRAGMENT from '../../graphql/product-fragments'
import CHECKOUT from '../checkout-query'
import Link from '../../Link';
import Profile from '../../Profile/index1'
import '../style.css'

/* const createCheckout = (
  client,
  {
    data: {

    }
  }
) */

const RepositoryItem = ({ id, title, description, onlineStoreUrl, images, variants }) => {
  return (
    <div>
{/*       <Mutation
          mutation={CHECKOUT}
          /> */}
      <div className="RepositoryItem-title">
        <h2>        <Link href={onlineStoreUrl}>{title}</Link></h2>
{/*         <div className="RepositoryItem-title-action">{title}</div> */}
      </div>
      <div className="RepositoryItem-description">
        <div className="RepositoryItem-description-details">
          <div className="row">
            {images.edges.map(image => (
              <div>
                <Link href={onlineStoreUrl}>
                <img
                  key={image.node.id}
                  src={image.node.originalSrc}
                  className="card-img-top"
                  style={{ height: '10em' }}
                  alt="cover"
                />
                </Link>
              </div>
            ))}
          </div>
          <div className="RepositoryItem-description-details">{description}</div>
          <div className="row">
            {variants.edges.map(variant => (
              <div>
                <h5 key={variant.node.id}>{variant.node.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}

export default RepositoryItem
