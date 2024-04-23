// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeqaf7S7h9uMFAMDmHlD4wTtceAYWZAxo",
  authDomain: "smart-parking-system-f1fb7.firebaseapp.com",
  databaseURL: "https://smart-parking-system-f1fb7-default-rtdb.firebaseio.com",
  projectId: "smart-parking-system-f1fb7",
  storageBucket: "smart-parking-system-f1fb7.appspot.com",
  messagingSenderId: "499697410709",
  appId: "1:499697410709:web:fb7f10b6f957f1983bf19c",
  measurementId: "G-G3XV2MJ1H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const database = getAuth(app)