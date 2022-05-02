// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNqHb4r2D44P_ZyRzDUP67x6Z_BDajOqk",
  authDomain: "furnio-minimal-design.firebaseapp.com",
  projectId: "furnio-minimal-design",
  storageBucket: "furnio-minimal-design.appspot.com",
  messagingSenderId: "532496260270",
  appId: "1:532496260270:web:7aa3ff038c5d945ba3e13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;