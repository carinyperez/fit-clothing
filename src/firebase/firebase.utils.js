import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDA4QLKY-zU48y4d7epCZfDmIAshPG8TII",
    authDomain: "fit-clothing.firebaseapp.com",
    databaseURL: "https://fit-clothing-default-rtdb.firebaseio.com",
    projectId: "fit-clothing",
    storageBucket: "fit-clothing.appspot.com",
    messagingSenderId: "1003636097345",
    appId: "1:1003636097345:web:4f90436996e43f8c6361c0",
    measurementId: "G-3MSJZYXQN8"
  };


// use userAuth object to query database for a document reference object 
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return; 
    // "current place" but no actual data 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // get the collection reference 
    const collectionRef = firestore.collection('users'); 
    // use CRUD methods on a doc ref to get a snapshot 
    const snapShot = await userRef.get(); 
    const collectionSnapshot = await collectionRef.get(); 
    console.log({collection: collectionSnapshot.docs.map(doc => doc.data())}); 
    // if snapshot does not exiist create an object reference
    if(!snapShot.exists) {
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 
        try {
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message); 
        }
    }
    return userRef; 
}

// batch write documents 
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    // get the collection reference
    const collectionRef = firestore.collection(collectionKey);
    // a set of write operations  
    const batch = firestore.batch();
    // loop through array 
    objectsToAdd.forEach(obj => {
        // get a document reference for each object 
        const newDocRef = collectionRef.doc(); 
        batch.set(newDocRef, obj); 
    }); 

    // fires batch request 
    return await batch.commit()
}


// example {bottomsandleggings: {id:1 title:"bottomsandleggings"}}
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        // call data method to get data from the snapshot 
        const {title, items} = doc.data(); 
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, 
            title,
            items
        }
    }); 
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator; 
    }, {}); 
}; 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
}
export default firebase;