// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9mw8KvCH0tBR_r6Ihq68UAMTV2NgtxeU",
  authDomain: "carrito-de-compra---react.firebaseapp.com",
  projectId: "carrito-de-compra---react",
  storageBucket: "carrito-de-compra---react.appspot.com",
  messagingSenderId: "856425172306",
  appId: "1:856425172306:web:ff746ae2991a6ed9163e8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )