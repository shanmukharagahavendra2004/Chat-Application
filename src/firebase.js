import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDU18HBLV71G5BuYxFpBt6spb6UC3M7o08",
    authDomain: "react-chat-app-64484.firebaseapp.com",
    projectId: "react-chat-app-64484",
    storageBucket: "react-chat-app-64484.firebasestorage.app",
    messagingSenderId: "894276102143",
    appId: "1:894276102143:web:bccc5181d08a51e05fa9ca"
  };

initializeApp(firebaseConfig);
const auth=getAuth();
const provider=new GoogleAuthProvider();
const db=getFirestore();
export {auth, provider,db};