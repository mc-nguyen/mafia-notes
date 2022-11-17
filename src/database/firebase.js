// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLjZrzt9QZSZtFg2I_RnJdGSA-ZOc1Zds",
    authDomain: "mafia-notes.firebaseapp.com",
    projectId: "mafia-notes",
    storageBucket: "mafia-notes.appspot.com",
    messagingSenderId: "891179937387",
    appId: "1:891179937387:web:b5e61af05a2502a0638b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);