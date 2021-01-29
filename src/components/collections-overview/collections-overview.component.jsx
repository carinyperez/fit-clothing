import React from 'react'; 
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector.js';
import {createStructuredSelector} from 'reselect'; 
import {connect} from 'react-redux'; 
import { CollectionOverviewContainer } from './collections-overview.styles';


const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview); 


