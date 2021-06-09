import React from 'react'; 
import {Query} from 'react-apollo'; 
import {gql} from 'apollo-boost'; 
import CollectionPage from './collection.component'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// getCollectionsByTitle(title: "Hats") 
const GET_COLLECTION_BY_TITLE = gql `
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
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

// http://localhost:3000/shop/sneakers hats, jackets, mens, womens 
const CollectionPageContainer = ({match}) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{title: match.params.collectionId}}>
    {
      (
        ({loading, data}) => {
          if(loading) return <WithSpinner/>;
          return <CollectionPage collection={data.getCollectionsByTitle}/>
        } 
      )
        }
  </Query>
)

export default CollectionPageContainer; 
