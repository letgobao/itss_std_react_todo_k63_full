import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjeygLfYE3gGgTQbUNHx4PaI7lkCADucY",
  authDomain: "tdls-1dc3d.firebaseapp.com",
  projectId: "tdls-1dc3d",
  storageBucket: "tdls-1dc3d.appspot.com",
  messagingSenderId: "1045020754932",
  appId: "1:1045020754932:web:a5c7e4d8043d473f1bafa1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db