// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJjMOeMBiMS2ObVlz1KH8548Q8VDH57Ts",
  authDomain: "bangla-mirror.firebaseapp.com",
  projectId: "bangla-mirror",
  storageBucket: "bangla-mirror.firebasestorage.app",
  messagingSenderId: "660699780127",
  appId: "1:660699780127:web:3b9858ead98259cbd9312a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
