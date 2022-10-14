// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOQEQg3Di9HV3Lf6TLScBpMTP6TQvJFsc",
  authDomain: "react-c64bc.firebaseapp.com",
  projectId: "react-c64bc",
  storageBucket: "react-c64bc.appspot.com",
  messagingSenderId: "221418881468",
  appId: "1:221418881468:web:675a8ece262c5548dd2bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;