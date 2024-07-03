// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH4zwAT5-u63r5MPsGqtXbryAdkY4H5Z8",
  authDomain: "home-decor-5f11a.firebaseapp.com",
  projectId: "home-decor-5f11a",
  storageBucket: "home-decor-5f11a.appspot.com",
  messagingSenderId: "453437751745",
  appId: "1:453437751745:web:8679cac362f748da896f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;