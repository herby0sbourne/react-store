import firebase from 'firebase';

/* import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; */
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_7KJy0ijFP3i2-9wtgTHOfw0zAVn_kE8',
  authDomain: 'react-store-6094b.firebaseapp.com',
  projectId: 'react-store-6094b',
  storageBucket: 'react-store-6094b.appspot.com',
  messagingSenderId: '39970164245',
  appId: '1:39970164245:web:a2367b3fa0285b211f481c',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const firestore = firebase.firestore();
const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase, auth, signInWithGoogle, database as default };
