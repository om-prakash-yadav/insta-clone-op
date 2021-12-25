// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXYe5Vs-GJwesVijIJSxVpKyUIABQ91kI",
  authDomain: "instagram-by-op.firebaseapp.com",
  projectId: "instagram-by-op",
  storageBucket: "instagram-by-op.appspot.com",
  messagingSenderId: "757317490946",
  appId: "1:757317490946:web:b4f8f3845afd79d6b38a1b"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage} ;

