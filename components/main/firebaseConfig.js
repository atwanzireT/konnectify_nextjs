// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsOddy6fbNTCRfd4VEfpmxkje5sNuuHHo",
  authDomain: "konnectify-ug.firebaseapp.com",
  projectId: "konnectify-ug",
  storageBucket: "konnectify-ug.appspot.com",
  messagingSenderId: "990000992336",
  appId: "1:990000992336:web:6038bf60eb5b4199080155",
  measurementId: "G-5KSEJVBPN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);export { auth, db };