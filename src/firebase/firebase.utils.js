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

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}
export default firebase;