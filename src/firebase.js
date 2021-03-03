import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbZw3HiGu-_4-dL-zDvPruZls9xNBnWsY",
  authDomain: "linkedin-1cdc3.firebaseapp.com",
  projectId: "linkedin-1cdc3",
  storageBucket: "linkedin-1cdc3.appspot.com",
  messagingSenderId: "85773766664",
  appId: "1:85773766664:web:48eaefd9a1e4bfde9f81bd",
  measurementId: "G-C4G6VPXD8Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
