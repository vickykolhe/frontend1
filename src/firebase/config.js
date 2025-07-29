// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optional: import getAnalytics only if needed
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDu-fStwkMl3W-hMsrCjg5cjVodZT0b8dk",
  authDomain: "testmaterial-96577.firebaseapp.com",
  projectId: "testmaterial-96577",
  storageBucket: "testmaterial-96577.firebasestorage.app",
  messagingSenderId: "226502068235",
  appId: "1:226502068235:web:468bdc1e08f844e79f1f0e",
  measurementId: "G-DZHSF6MC7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
export const auth = getAuth(app);

// Optional: Analytics
// const analytics = getAnalytics(app);
