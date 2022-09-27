// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOwgYPXI3tOezT0JfSzhVFeFOeLqP8aCg",
  authDomain: "data-ecommerce.firebaseapp.com",
  projectId: "data-ecommerce",
  storageBucket: "data-ecommerce.appspot.com",
  messagingSenderId: "272224354142",
  appId: "1:272224354142:web:0afe7adec13932ca1399cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Base de datos
export const db = getFirestore(app)







