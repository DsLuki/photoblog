// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCea5PLKjU_u8_OzwUMk_Ee9bCZl8rRYVA",
  authDomain: "photoblog-af815.firebaseapp.com",
  projectId: "photoblog-af815",
  storageBucket: "photoblog-af815.appspot.com",
  messagingSenderId: "1045815666016",
  appId: "1:1045815666016:web:ad15454339e4364bbe6a05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
