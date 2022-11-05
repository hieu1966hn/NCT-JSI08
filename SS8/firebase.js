import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhbohUHuw6k-16rdk-_mFxS5tB2rTlUg",
  authDomain: "nct-jsi08.firebaseapp.com",
  projectId: "nct-jsi08",
  storageBucket: "nct-jsi08.appspot.com",
  messagingSenderId: "605122816626",
  appId: "1:605122816626:web:ca0db1e83c984f5791f0eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const subscriptions = [];