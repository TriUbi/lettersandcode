import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9ubpzaRY3AaE6N2FhKUXVH9L7wvV_Ie8",
  authDomain: "letterandcode.firebaseapp.com",
  projectId: "letterandcode",
  storageBucket: "letterandcode.appspot.com",
  messagingSenderId: "320436002016",
  appId: "1:320436002016:web:a93800e14d506467864485",
  measurementId: "G-MHY0P12VBF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
