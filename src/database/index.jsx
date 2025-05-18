// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZNaoZyYt6_2-liWyxkROmmA-1DAl73I",
  authDomain: "liga-facil-475ed.firebaseapp.com",
  projectId: "liga-facil-475ed",
  storageBucket: "liga-facil-475ed.firebasestorage.app",
  messagingSenderId: "911418960768",
  appId: "1:911418960768:web:39c51c7660445eb7b4ef65",
  measurementId: "G-2YR6L1VE1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);