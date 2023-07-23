import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCrF3q7znVdTQl9TvBilcgd_FJQbdkMl6g",
  authDomain: "project-bear-4797f.firebaseapp.com",
  projectId: "project-bear-4797f",
  storageBucket: "project-bear-4797f.appspot.com",
  messagingSenderId: "648929178353",
  appId: "1:648929178353:web:a57043778f439d4071af50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };