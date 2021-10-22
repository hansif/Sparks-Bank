// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLj_5O36tcFe_4256ee0VBYCC79PYiEkY",
  authDomain: "banking-system-cee68.firebaseapp.com",
  projectId: "banking-system-cee68",
  storageBucket: "banking-system-cee68.appspot.com",
  messagingSenderId: "1050322799530",
  appId: "1:1050322799530:web:7b7eaaaf92fededa8279d3",
  measurementId: "G-6MQYEJWBCN"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();