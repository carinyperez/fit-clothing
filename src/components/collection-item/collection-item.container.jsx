import React from 'react'; 
import {Query, Mutation} from 'react-apollo'; 
import {gql} from 'apollo-boost'; 
import CollectionItem from './collection-item.component';

// mutation 
// AddItemToCart(item: Item!)
const ADD_ITEM_TO_CART = gql `
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client 
    }
`
const CollectionItemContainer = (props) => {
    return (
        <Mutation mutation={ADD_ITEM_TO_CART}>
             {
                //  addItem: item => dispatch(addItem(item))
                addItemToCart => <CollectionItem {...props} 
                addItemToCart={item => addItemToCart({variables: {item}})}/>
             }
        </Mutation>
    )
}

export default CollectionItemContainer; 