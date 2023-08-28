import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrF3q7znVdTQl9TvBilcgd_FJQbdkMl6g",
  authDomain: "project-bear-4797f.firebaseapp.com",
  projectId: "project-bear-4797f",
  storageBucket: "project-bear-4797f.appspot.com",
  messagingSenderId: "648929178353",
  appId: "1:648929178353:web:a57043778f439d4071af50"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export { getDoc ,setDoc, collection, doc}