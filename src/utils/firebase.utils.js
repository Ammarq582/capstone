import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCtAuJn5Dr3lCCj0sEe4m-FJNF7owFioiE",
    authDomain: "crown-clothing-db-966a1.firebaseapp.com",
    projectId: "crown-clothing-db-966a1",
    storageBucket: "crown-clothing-db-966a1.appspot.com",
    messagingSenderId: "826418101288",
    appId: "1:826418101288:web:f510e39dd229f65da7891d"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


 export const db = getFirestore();
 export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
 }


 export const createAuthUserWithEmailAndPassword = async (email, password) => {
  console.log('before run');
  if(!email || !password) return;
  console.log('run');
  return await createUserWithEmailAndPassword(auth, email, password)

 }

//  export const createUserDocumentFromWithEmailandPassword = async (user, formData) => {
//   const userDocRef = doc(db, 'users', user.uid);
//   const userSnapshot = await getDoc(userDocRef);

//   if(!userSnapshot.exists()) {
//     const {displayName, email} = formData;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt
//       })
//     } catch(err) {
//       console.log(err);
//     }
//   }

//   return userDocRef
//  }
