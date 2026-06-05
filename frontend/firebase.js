// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-352c0.firebaseapp.com",
  projectId: "vingo-food-delivery-352c0",
  storageBucket: "vingo-food-delivery-352c0.firebasestorage.app",
  messagingSenderId: "854998938361",
  appId: "1:854998938361:web:b0ec889f0bf34d3223e828",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {app,auth}
