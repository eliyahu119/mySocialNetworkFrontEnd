import {MdAttachEmail} from 'react-icons/md'


import React from "react";
export function EmailInput({
  handleEmailChange
}) {
  return <div className='flex items-center space-x-1'>
      <MdAttachEmail size={25} />
      <input className="border-orange-300  opacity-90 border-2 p-1  rounded-xl" id='RegisterEmail' onChange={handleEmailChange} required type="email" />
    </div>;
}
  