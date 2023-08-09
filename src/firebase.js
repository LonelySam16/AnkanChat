import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpF_P70IXIhdDbAuwbx9gZUlpbluAkgfA",
  authDomain: "reactchat-72b59.firebaseapp.com",
  projectId: "reactchat-72b59",
  storageBucket: "reactchat-72b59.appspot.com",
  messagingSenderId: "1043553723721",
  appId: "1:1043553723721:web:f2ee72302233782637e698",
  measurementId: "G-NP139HXBDT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
