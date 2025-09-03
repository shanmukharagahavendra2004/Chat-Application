import React from 'react'
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
const LoginPage = () => {
  const signInUser=()=>{
    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  }
  return (
    <div className="text-center mt-72">
        <h1 className="text-4xl font-bold">MyChatApp</h1>
        <button className="bg-blue-500 text-sm font-bold text-white rounded-lg hover:scale-110 transition-all duration-200 ease-in-out p-3 mt-5" onClick={signInUser}>Sign in with google</button>

    </div>
  )
}

export default LoginPage