import React from 'react'; 
import {Query} from 'react-apollo'; 
import {gql} from 'apollo-boost';
import CollectionsOverview from './collections-overview.component'; 
import WithSpinner from '../with-spinner/with-spinner.component';

const GET_COLLECTIONS = gql`
    {
        collections {
        id 
        title
        items {
            id
            name 
            price 
            imageUrl
      }
    }
  }
`

const CollectionsOverviewContainer = () => (
    <Query query={GET_COLLECTIONS}>
        {
            (
              ({loading,data}) => {
                if(loading) return <WithSpinner/>;
                return <CollectionsOverview collections={data.collections}/>
              } 
            )
        }
    </Query>
);

export default CollectionsOverviewContainer; 