import React from 'react'; 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import {Route} from 'react-router-dom'; 
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionsPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props; 
        fetchCollectionsStartAsync(); 
    }
   
    render() {
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}
                />
                {/* Dynamically change object data based on what route we are on*/}
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
            </div>
        )
    }  
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching, 
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch  => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage); 