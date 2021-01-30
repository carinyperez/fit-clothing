import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'; 
import {connect} from 'react-redux'; 
import { selectCollection } from '../../redux/shop/shop.selector';
import { CollectionPageContainer,TitleContainer,ItemsContainer  } from './collection.styles';


const CollectionPage = ({collection}) => {
    const {title, items} = collection; 
    return(
    <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer >
            {items.map(item => <CollectionItem key={item.id} item={item}/>)}
        </ItemsContainer>
    </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    // returns object with matching id to url typed 
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
 

export default connect(mapStateToProps)(CollectionPage); 

