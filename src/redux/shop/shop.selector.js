import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    // string value goes to the id 
    // url param is a string but id is a number 
    bottomsandleggings: 1, 
    hoodiesandjackets: 2,
    shorts: 3,
    sportsbras: 4, 
    tshirtsandtops: 5,
}

const selectShop = state => state.shop; 

export const selectCollections= createSelector(
    [selectShop], 
    shop => shop.collections
); 

// find collection.id matching the url param of our collection id map 
// returns an object if the id of the url param matches 
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], 
    // matching id to id map 
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)



