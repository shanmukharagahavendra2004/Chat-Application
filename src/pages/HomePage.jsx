import React, {useState,useRef,useEffect} from 'react';
import Header from '../components/Header';
import Message from '../components/Message.jsx';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth,db} from "../firebase";
import {addDoc,collection,serverTimestamp,query,orderBy} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";
import {motion,AnimatePresence} from "framer-motion";
import "../index.css"

const HomePage = () => {
    const [input,setInput]=useState("");
    const [user]=useAuthState(auth);
    const lastMessageDiv=useRef(null);
const sendMessage=()=>{
    addDoc(collection(db, 'chats'), {
    sender:user?.displayName,
    message:input,
    time:serverTimestamp(),
}).then(()=>{
    setInput("");
    scrollToBottom();
}).catch(err=>alert(err.message));
}

const[messages,loading]=useCollection(
    query(collection(db,"chats"),orderBy("time","asc")));
    // console.log(messages[0].id);
    const scrollToBottom=()=>{
        if(lastMessageDiv.current){
            lastMessageDiv.current.scrollIntoView({
            behavior: "smooth",
            block:"end"
        });
    }
    }
    useEffect(()=>
    {
        if(messages?.docs.length>0)
        {
            scrollToBottom();
        }
    },[messages]);
  return (
    <div>
        <Header/>
        {/*Body*/}
        <div className="max-w-3xl mx-auto mt-5">
            {/* Messages */}
            <div className="p-5">
                <AnimatePresence>
                {messages?.docs?.map((message)=>(
                    <motion.div
                    key={message.id}
                    initial={{opacity:0,y:50}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0,y:-50}}
                    transition={{duration:0.3}}

                    >
               <Message 
               key={message.id} 
               sender={message.data().sender} 
               message={message.data().message} 
               time={message?.data()?.time?.toDate().getTime()}
               />
                </motion.div>
               
                ))}
                </AnimatePresence>
              
                <div ref={lastMessageDiv} className="mb-10">
                
            </div>
            {/* Input */}
            <div className="fixed bottom-2 w-96 flex items-center justify-between space-x-2 left-96">
                <input value={input} onChange={(e)=>setInput(e.target.value)}
                type="text" placeholder="Enter a Message" className="flex-1 bg-gray-200 p-3 rounded-lg border-1 outline-none"/>
                <button disabled={!input} onClick={sendMessage} className="bg-violet-700 text-sm text-white font-bold p-3 rounded-lg hover:scale-95 transition-all duration-200 ease-in-out disabled:cursor-not-allowed">Send</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default HomePage