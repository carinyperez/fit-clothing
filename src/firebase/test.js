import firebase from 'firebase/app'; 
// database 
import 'firebase/firestore'; 


const firestore = firebase.firestore(); 

// get colllection named users then find the id, querying 
const user = firestore.collection('users').doc('1096z3Tl6vvabp069U4d').collection('cartItems').doc('5jhxU1RA1fprDHQ4nFoa'); 

firestore.doc('/users/1096z3Tl6vvabp069U4d/cartItems/5jhxU1RA1fprDHQ4nFoa');