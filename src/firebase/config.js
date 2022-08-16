// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTKpJyT4oX3XEVpU18-NEaHZ8tDskIY4",
  authDomain: "imagegallery-984d8.firebaseapp.com",
  projectId: "imagegallery-984d8",
  storageBucket: "imagegallery-984d8.appspot.com",
  messagingSenderId: "465568423569",
  appId: "1:465568423569:web:048611c8b120bedc87e930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init FireStore 
const projectFireStore =getFirestore();

// Init Storage

const projectStorage = getStorage();

export {projectFireStore, projectStorage};

