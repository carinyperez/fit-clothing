import React from 'react'; 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; 
import {Route} from 'react-router-dom'; 
import CollectionPage from '../collection/collection.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionsPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {

    // if no constructor is given react will handle that in the background
    state = {
        loading: true
    };      

    unsubscribeFromSnapshot = null; 

    componentDidMount() {
        //returns a reference to 'collections' 
        const {updateCollections} = this.props; 
        const collectionRef = firestore.collection("collections"); 
        // attaches a listener for onSnapshot events 
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            // example {bottomsandleggings: {id:1 title:"bottomsandleggings"}}
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            // if component mounts render wrapped component 
            this.setState({loading:false}) 
        })

    } 
    render() {
        const {match} = this.props;
        const {loading} = this.state; 
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}
                />
                {/* Dynamically change object data based on what route we are on*/}
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }  
};

const mapDispatchToProps = dispatch  => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage); 