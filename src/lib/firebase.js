import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8GoEnCRtSAHNzNu_39j797eB-eoAcrgQ",
  authDomain: "stgood-b0ae0.firebaseapp.com",
  projectId: "stgood-b0ae0",
  storageBucket: "stgood-b0ae0.appspot.com",
  messagingSenderId: "669248595863",
  appId: "1:669248595863:web:ec085c272c7d51808006d2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export default db