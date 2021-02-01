import React from 'react'; 
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector.js';
import {createStructuredSelector} from 'reselect'; 
import {connect} from 'react-redux'; 
import { CollectionOverviewContainers } from './collections-overview.styles';


const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainers>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </CollectionOverviewContainers>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview); 


