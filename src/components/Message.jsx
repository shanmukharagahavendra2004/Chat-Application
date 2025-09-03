import React from 'react';
import moment from 'moment';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";

const Message = ({ sender, message, time }) => {
  const [user]=useAuthState(auth);
  return (
    <div className={`${
      sender===user?.displayName? 
      "relative bg-blue-400 text-white p-2 rounded-lg mb-3 max-w-[150px] ml-auto mt-8 rounded-tr-none":
      "relative w-fit bg-gray-400 p-2 rounded-lg mt-8 max-w-[150px] rounded-tl-none mb-3 "}`}>
      <p className="text-xs font-semibold text-black mb-1">{sender}</p>
      <p className="text-sm">{message}</p>
      <p className="text-xs text-right text-black mt-2">{moment(time).format('h:mm A')}</p>
    </div>
  );
};

export default Message;
