import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAXsDkePHWmLoVVyCnbYBt--d8eDKb2V9c",
  authDomain: "crwn-db-8a360.firebaseapp.com",
  projectId: "crwn-db-8a360",
  storageBucket: "crwn-db-8a360.appspot.com",
  messagingSenderId: "118472016374",
  appId: "1:118472016374:web:b00e643df8390797d987d7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;