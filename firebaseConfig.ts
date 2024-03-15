import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgW1812Cfhd3rXKtcFHQo6PAyYmw3BfSk",
  authDomain: "todotracker-82251.firebaseapp.com",
  projectId: "todotracker-82251",
  storageBucket: "todotracker-82251.appspot.com",
  messagingSenderId: "177608586834",
  appId: "1:177608586834:web:0a036f8b09d0187ecdd18b",
  measurementId: "G-KJFRBECXCX"
};

const app = initializeApp(firebaseConfig);
export default app;