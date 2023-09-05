// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHX5SDM-VW0b2FZQHSIx-Fd23sDjdZISk",
    authDomain: "homeify-d3bfa.firebaseapp.com",
    projectId: "homeify-d3bfa",
    storageBucket: "homeify-d3bfa.appspot.com",
    messagingSenderId: "658668722768",
    appId: "1:658668722768:web:93e408911b6361ae5d4f55"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
