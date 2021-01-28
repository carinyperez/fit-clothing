import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDA4QLKY-zU48y4d7epCZfDmIAshPG8TII",
    authDomain: "fit-clothing.firebaseapp.com",
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
    const userRef = firestore.doc(`users/$1234`);
    // ge the collection reference 
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
                displayName: 'Test User', 
                email: 'randomEmail@gmail.com', 
                createdAt, 
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message); 
        }
    }

    return userRef; 
}


export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey); 
    console.log(collectionRef); 
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}
export default firebase;