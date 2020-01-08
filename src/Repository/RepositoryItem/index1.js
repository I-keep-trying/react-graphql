import React from 'react';
// import Link from '../../Link';
import '../style.css';

const RepositoryItem = ({
 id,
 title,
 description
}) => (
  <div>
    <div className="RepositoryItem-title">
      <h2>
{/*         <Link href={url}>{name}</Link> */}
      </h2>
      <div className="RepositoryItem-title-action">
        {title} 
      </div>
    </div>
{/*     <div className="RepositoryItem-description">
      
      <div className="RepositoryItem-description-details">
        <div>
          {primaryLanguage && (
            <span>Language: {primaryLanguage.name}</span>
          )}
        </div>
        <div>
          {owner && (
            <span>
              Owner: <a href={owner.url}>{owner.login}</a>
            </span>
          )}
        </div>
      </div>
    </div>
 */} 
  </div>
);

export default RepositoryItem;