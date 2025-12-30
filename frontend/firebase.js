// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvwiQD29jkk5BkWpnBdoWnKKl6-8KVeLY",
  authDomain: "hostel-hungry.firebaseapp.com",
  projectId: "hostel-hungry",
  storageBucket: "hostel-hungry.firebasestorage.app",
  messagingSenderId: "804368609908",
  appId: "1:804368609908:web:9c80d6cefbe0c889549721",
  measurementId: "G-E7KF3Y564D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}