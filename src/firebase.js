// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCaGjxUX7GiXnD_XakpGJtgs4Bo_Cjq0Eg",
    authDomain: "tiktok-clone-58468.firebaseapp.com",
    projectId: "tiktok-clone-58468",
    storageBucket: "tiktok-clone-58468.appspot.com",
    messagingSenderId: "670776713587",
    appId: "1:670776713587:web:ad8282537076e9568ba506",
    measurementId: "G-W4YXL75X4T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

export default db; 
