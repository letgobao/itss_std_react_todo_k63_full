import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxMGFRqlQv0Jv18QkF52KjEPtbXC7Vdgw",
  authDomain: "fir-sample-4f778.firebaseapp.com",
  projectId: "fir-sample-4f778",
  storageBucket: "fir-sample-4f778.appspot.com",
  messagingSenderId: "229091735239",
  appId: "1:229091735239:web:c0340fc2d67e550649b0e2"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db