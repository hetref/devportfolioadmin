// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMDpAnTWXrbDr1RxEGaPZcJ03pyjKjzas",
  authDomain: "aryandeveloperportfolio.firebaseapp.com",
  projectId: "aryandeveloperportfolio",
  storageBucket: "aryandeveloperportfolio.appspot.com",
  messagingSenderId: "967328598696",
  appId: "1:967328598696:web:802b7b728f878e6975109d",
  measurementId: "G-XLQ8V61NSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
