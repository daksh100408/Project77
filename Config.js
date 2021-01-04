import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAB-v8_PzveF9N5AHFsi9HhTtBIKaeNYyA",
    authDomain: "barter-system-c2d7f.firebaseapp.com",
    projectId: "barter-system-c2d7f",
    storageBucket: "barter-system-c2d7f.appspot.com",
    messagingSenderId: "982955194246",
    appId: "1:982955194246:web:0c14d7cb12eabd1788de07"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase.firestore();