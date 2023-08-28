import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDoc, addDoc, setDoc, Timestamp, doc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import {onAuthStateChanged, signInWithEmailAndPassword ,createUserWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCrF3q7znVdTQl9TvBilcgd_FJQbdkMl6g",
  authDomain: "project-bear-4797f.firebaseapp.com",
  projectId: "project-bear-4797f",
  storageBucket: "project-bear-4797f.appspot.com",
  messagingSenderId: "648929178353",
  appId: "1:648929178353:web:a57043778f439d4071af50"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, getDoc, Timestamp, addDoc, setDoc, doc };
export { query, orderBy, limit, where, onSnapshot };
export { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth , setPersistence,browserSessionPersistence};