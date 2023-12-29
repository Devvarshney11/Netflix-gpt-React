// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtPVQ83G40sfhoFBnP1VV68d9e72elTWE",
  authDomain: "netflix-gpt-d376d.firebaseapp.com",
  projectId: "netflix-gpt-d376d",
  storageBucket: "netflix-gpt-d376d.appspot.com",
  messagingSenderId: "486370179601",
  appId: "1:486370179601:web:ed5392c1a10b26ad43cfb0",
  measurementId: "G-H6TTXN487B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);