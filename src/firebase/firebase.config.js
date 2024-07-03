import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb06KYsBFAlYeXijcuc6sdqwADHRr8TdM",
  authDomain: "auth-mohamilon-shova.firebaseapp.com",
  projectId: "auth-mohamilon-shova",
  storageBucket: "auth-mohamilon-shova.appspot.com",
  messagingSenderId: "908916715703",
  appId: "1:908916715703:web:6473a73c67b02fc9329d32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
