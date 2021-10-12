import fb from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhgH6QXvp8VLuE4NSACD_9Jj23rlyU4qY",
  authDomain: "react-app-project-56e85.firebaseapp.com",
  databaseURL:
    "https://react-app-project-56e85-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-app-project-56e85",
  storageBucket: "react-app-project-56e85.appspot.com",
  messagingSenderId: "487830755454",
  appId: "1:487830755454:web:0a6ce74447366e9953a02f",
};

export const firebase = !fb.apps.length
  ? fb.initializeApp(firebaseConfig)
  : fb.app();
