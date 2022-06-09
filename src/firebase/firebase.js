// import firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB_7KJy0ijFP3i2-9wtgTHOfw0zAVn_kE8',
  authDomain: 'react-store-6094b.firebaseapp.com',
  projectId: 'react-store-6094b',
  storageBucket: 'react-store-6094b.appspot.com',
  messagingSenderId: '39970164245',
  appId: '1:39970164245:web:a2367b3fa0285b211f481c',
};

firebase.initializeApp(firebaseConfig);

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

const auth = firebase.auth();
// const database = firebase.database();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
  firebase,
  signInWithGoogle,
  createUserProfileDocument,
  auth,
  firestore as default,
};
