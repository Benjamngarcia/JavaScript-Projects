// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYET5-889FsDU-YU7x7HYiYi2XNqiOr3g",
    authDomain: "note-app-d8aea.firebaseapp.com",
    projectId: "note-app-d8aea",
    storageBucket: "note-app-d8aea.appspot.com",
    messagingSenderId: "780646907355",
    appId: "1:780646907355:web:1d78e6331c48d889587bfe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)