import React from 'react'; 
import './collection-item.styles.scss'; 

// reference to anon function that takes props and renders component
// pulling data from shop data  
const CollectionItem = ({id, name, price, imageUrl,changeImageUrl}) => (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        // onClick={() => (`${console.log(changeImageUrl)}`)}
        />
    <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    </div>
);

export default CollectionItem; 