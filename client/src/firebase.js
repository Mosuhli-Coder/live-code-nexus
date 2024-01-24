// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyBc3hx7FPvqO507Ip5zix2ESWsvEwLhf9E",
  authDomain: "live-code-nexus.firebaseapp.com",
  projectId: "live-code-nexus",
  storageBucket: "live-code-nexus.appspot.com",
  messagingSenderId: "130752584390",
  appId: "1:130752584390:web:7e7339279d1bcfdbb755c7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
