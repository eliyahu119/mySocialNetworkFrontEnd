import {FaRegUser} from 'react-icons/fa';

 export function UserInput({handleUserChange}) {
    return (<div className="flex items-center space-x-1 ">
          <FaRegUser size={25} />
          <input className="border-orange-300  opacity-90 border-2 p-1  rounded-xl" 
          onChange={handleUserChange} 
          required type="user" 
          placeholder='User name'
          />
         </div>);
        }