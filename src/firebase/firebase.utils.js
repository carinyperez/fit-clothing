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

// async function needed to make api request to firestore
// stores users into database 
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return; 
    //get a reference to the user’s document in the users collection
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // returns current content of the document, returns a promise 
    const snapShot = await userRef.get(); 

    // if no data write data to the document using set
    if (!snapShot.exists) {
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 

    try {
        await userRef.set({
            displayName,
            email, 
            createdAt,
            ...additionalData
        })

    } catch(error) {
        console.log('error creating user', error.message); 

    }
    // return user's data 
    return userRef;

    } 
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