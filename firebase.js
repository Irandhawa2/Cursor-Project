import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace this configuration with the one from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDy3rJ6t3M4kZK6IeM8N079pcKkvvgXqqM",
  authDomain: "actor-and-actress-app.firebaseapp.com",
  projectId: "actor-and-actress-app",
  storageBucket: "actor-and-actress-app.firebasestorage.app",
  messagingSenderId: "454604270233",
  appId: "1:454604270233:web:a2f84cc814ddddf79d2608",
  measurementId: "G-2TQWXVZZ6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 