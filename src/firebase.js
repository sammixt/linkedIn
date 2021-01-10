import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDyRYALNGJzyTsbg2JI5XSCpDy9mKVQ93U",
  authDomain: "linkedin-clone-b8c96.firebaseapp.com",
  projectId: "linkedin-clone-b8c96",
  storageBucket: "linkedin-clone-b8c96.appspot.com",
  messagingSenderId: "728402343915",
  appId: "1:728402343915:web:a080f46283102779780bae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
