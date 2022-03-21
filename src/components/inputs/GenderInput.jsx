import React from "react";
import {BsGenderAmbiguous} from 'react-icons/bs'

export function GenderInput({
  gender,
  handleGenderChange
}) {
  return <div className=' m-auto  flex items-center space-x-2'>
       <BsGenderAmbiguous size={25} />
     <select className=" opacity-90 border-2 p-1  rounded-xl" id='RegisterGender' value={gender} onChange={handleGenderChange}>
            <option value={1}>Male</option>
            <option value={0}>Female </option>
    </select>
    </div>;
}
  