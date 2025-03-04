import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtFn13CEl3fegPAWP50WeFYA9AOc1blE4",
  authDomain: "eventtracker-f98f6.firebaseapp.com",
  projectId: "eventtracker-f98f6",
  storageBucket: "eventtracker-f98f6.firebasestorage.app",
  messagingSenderId: "188665970200",
  appId: "1:188665970200:web:9f3aa3087887ef34b58d6d",
  measurementId: "G-J6WEV8BQPW",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
