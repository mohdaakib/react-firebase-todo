import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDY6pREhY4EPcfkQQz67ooMRXt7VgCKD6A",
  authDomain: "todo-app-cp-4adea.firebaseapp.com",
  databaseURL: "https://todo-app-cp-4adea-default-rtdb.firebaseio.com",
  projectId: "todo-app-cp-4adea",
  storageBucket: "todo-app-cp-4adea.appspot.com",
  messagingSenderId: "343630683671",
  appId: "1:343630683671:web:bddd9b2e71d5f0929f8652",
  measurementId: "G-Y16HNWJ67Z"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();


export default db;

