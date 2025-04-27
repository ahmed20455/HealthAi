// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // If you're using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDC8KU3tAfPvweJgnw8wjhkNdTOYp8MKoo",
  authDomain: "healthai-a0977.firebaseapp.com",
  projectId: "healthai-a0977",
  storageBucket: "healthai-a0977.firebasestorage.app",
  messagingSenderId: "306567484693",
  appId: "1:306567484693:web:bb6229cd0c864cd6c7c51c",
  measurementId: "G-3VWEC6C9T6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp); // If you're using Firestore
export default firebaseApp;