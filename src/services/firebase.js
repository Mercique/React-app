// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7moD5Nn4EQrCGihixol9JjWw9-NIF5I",
  authDomain: "gb-react-5ef48.firebaseapp.com",
  projectId: "gb-react-5ef48",
  storageBucket: "gb-react-5ef48.appspot.com",
  messagingSenderId: "520016025919",
  appId: "1:520016025919:web:eb20d1af748e1557005b8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);
