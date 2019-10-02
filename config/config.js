
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAujn2JwPmp-YbR9MpbsGJaiZkCEQh0F1w",
    authDomain: "photosalam-4b192.firebaseapp.com",
    databaseURL: "https://photosalam-4b192.firebaseio.com",
    projectId: "photosalam-4b192",
    storageBucket: "",
    messagingSenderId: "244581038967",
    appId: "1:244581038967:web:e53bd3acd58f4e41"
  }; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const f = firebase;
  export const databse = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage(); 
