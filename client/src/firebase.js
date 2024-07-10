// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ac371.firebaseapp.com",
  projectId: "mern-estate-ac371",
  storageBucket: "mern-estate-ac371.appspot.com",
  messagingSenderId: "360365612397",
  appId: "1:360365612397:web:21ece8100f61ec89cace64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);