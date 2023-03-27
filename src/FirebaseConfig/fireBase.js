// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9wydWXyEqolcziC4Z4CqGUP1M0zOr7Y",
  authDomain: "esenzzia-961d1.firebaseapp.com",
  projectId: "esenzzia-961d1",
  storageBucket: "esenzzia-961d1.appspot.com",
  messagingSenderId: "832846358695",
  appId: "1:832846358695:web:efce2a9d0277c2e7bad382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore (app)