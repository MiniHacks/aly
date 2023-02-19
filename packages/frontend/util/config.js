import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP7JoDlX-8O1Nm1DA260t3npKSE0K2ac",
  authDomain: "hackathon-yoke.firebaseapp.com",
  projectId: "hackathon-yoke",
  storageBucket: "hackathon-yoke.appspot.com",
  messagingSenderId: "952030183707",
  appId: "1:952030183707:web:6c0d1406a0e67142ad53be",
  measurementId: "G-NRBB9S6SWP",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
