import React from "react";
import {MdPassword} from 'react-icons/md';


export function PasswordInput({
  handlePasswordChange
}) {
  return <div className="flex items-center space-x-1">
           <MdPassword size={25} />
            <input 
            className="border-orange-300  opacity-90 border-2 p-1 px-2 rounded-xl "
             onChange={handlePasswordChange} 
             required type="password" 
             placeholder="Password"
             
             />
           </div>;
}
  