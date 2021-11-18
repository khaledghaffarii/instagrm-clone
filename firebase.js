// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1A6wiInxnFyVtxHeBAWWknJp76Tev2Kk",
  authDomain: "instagram-clone-a5bc7.firebaseapp.com",
  projectId: "instagram-clone-a5bc7",
  storageBucket: "instagram-clone-a5bc7.appspot.com",
  messagingSenderId: "357265527601",
  appId: "1:357265527601:web:333833707bd32cfe821610",
  measurementId: "G-HJLHZCG525",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
//const analytics = getAnalytics(app);
