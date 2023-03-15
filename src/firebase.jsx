// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { app } from "firebase";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QIQ-n_WfNxkLy1h5rADG4M9Dqpc3BSU",
  authDomain: "portfolio-blog-1bb93.firebaseapp.com",
  projectId: "portfolio-blog-1bb93",
  storageBucket: "portfolio-blog-1bb93.appspot.com",
  messagingSenderId: "150535432525",
  appId: "1:150535432525:web:014b82c74bd97752ffaf04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// export const auth = app.auth();
// export const firestore = app.firestore();
