// Import the functions you need from the SDKs you need
// import { analytics } from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { firebaseAnalytics, provider, auth } from "./firebase"; // Update the import statement

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBio3aQjfsspekvKYVmkiyPRbG03tCGIio",
  authDomain: "xo-texi.firebaseapp.com",
  projectId: "xo-texi",
  storageBucket: "xo-texi.appspot.com",
  messagingSenderId: "874638028078",
  appId: "1:874638028078:web:0ed6340bf44b9139d81ebf",
  measurementId: "G-EVSC0X46KM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseAnalytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, auth, provider,  };
