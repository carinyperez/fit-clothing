import { createSelector } from "reselect";
import memoize from 'lodash.memoize'; 

const selectShop = state => state.shop; 

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
); 

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // map array of keys and return object at key   
    collections => collections ? Object.keys(collections).map(key => collections[key]) :[]

)
// find collection.id matching the url param of our collection id map 
// returns an object if the id of the url param matches 
// if the function gets called again with the same url param return a memoized function 
export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectCollections], 
    // matching id to id map 
    collections => collections ? collections[collectionUrlParam] : null
)); 


// data normalization: storing lists of elements inside of an object instead of an array 

export const selectIsCollectionFetching = createSelector(
    [selectShop], 
    shop => shop.isFetching 
); 

export const selectIsCollectionsLoaded = createSelector(
    [selectShop], 
    // !! converts null into falsy 
    shop => !!shop.collections
)

