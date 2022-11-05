import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
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
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const subscription = [];