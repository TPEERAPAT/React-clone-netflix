// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0j_rejC2EdyQjRfegEi6QXTpRjQqkLbk",
  authDomain: "clone-netfilx-1bf8b.firebaseapp.com",
  projectId: "clone-netfilx-1bf8b",
  storageBucket: "clone-netfilx-1bf8b.appspot.com",
  messagingSenderId: "16578510453",
  appId: "1:16578510453:web:a821276ff66f7280e5823c",
};

// .env
// REACT_APP_FIREBASE_API_KEY=AIzaSyDR9p2v5I4v3njmoaKFom3SP1lLc6IRU2c
// REACT_APP_FIREBASE_AUTH_DOMAIN=netfilx-clone-31a78.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netfilx-clone-31a78
// REACT_APP_FIREBASE_STORAGE_BUCKET=netfilx-clone-31a78.appspot.com
// REACT_APP_MESSAGING_SENDER=914691610346
// REACT_APP_APP_ID=1:914691610346:web:ce3a255f67ca90e2612993

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
