import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAJxzzl4xC4bi4dsWg6C4-FMsaMZg8L1T4",
    authDomain: "apnagram-56b31.firebaseapp.com",
    databaseURL: "https://apnagram-56b31.firebaseio.com",
    projectId: "apnagram-56b31",
    storageBucket: "apnagram-56b31.appspot.com",
    messagingSenderId: "1012374564652",
    appId: "1:1012374564652:web:1e24bbb6341620ed954689",
    measurementId: "G-N3T0MMZ3DM"
  };
const firebaseapp=firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db= firebaseapp.firestore()
const  provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage()
export default db;
export {auth,provider,storage};