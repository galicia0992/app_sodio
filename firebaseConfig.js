// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getDatabase} from "firebase/database"
import { getFirestore, getDocs, collection } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbBA79ttVNBgcZiFU-qZegaFMrcr8iqCw",
  authDomain: "sodioapp-c0eb6.firebaseapp.com",
  databaseURL: "https://sodioapp-c0eb6-default-rtdb.firebaseio.com",
  projectId: "sodioapp-c0eb6",
  storageBucket: "sodioapp-c0eb6.appspot.com",
  messagingSenderId: "620584076782",
  appId: "1:620584076782:web:1daaf2ff0e89e4a4c2baff",
  measurementId: "G-J5KJJP5V19"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const db = getFirestore(FIREBASE_APP)
export const database = getDatabase(FIREBASE_APP)
