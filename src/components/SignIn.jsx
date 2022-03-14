import { GenderInput } from './inputs/GenderInput';
import { EmailInput } from './inputs/EmailInput';

import { useState } from 'react'
import useIsUserAuth from '../hooks/useIsUserAuth'
import axios from 'axios'
import { UserInput } from './inputs/Userinput'
import { PasswordInput } from './inputs/Passwordinput'
import { useAlert } from 'react-alert';
import { StyledSubmit } from './inputs/StyledSubmit'
export default function SignIn() {
  useIsUserAuth()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState(1)
    const alert=useAlert();
   





const handleRegister=(event)=>{

    event.preventDefault();
    const SignInfo = {
        password,
        user,
        email,
        gender:!!gender
    }
    axios.post('/signin',SignInfo).then(
        res=>res.data).then(
        data=>{ 
            //TODO::put here some alert
            alert.success("User has been registered")
            console.log(data.message)
    }).catch(
            //TODO:: put here some kind of alert error to inform the user 
            e=>{  alert.error(e.response.data.message);
                  console.log(e)
            })
}
const handleUserChange = (e) => {
  setUser(e.target.value)
}
const handlePasswordChange = (e) => {
  setPassword(e.target.value)
}
const handleEmailChange = (e) => {
  setEmail(e.target.value)
}
const handleGenderChange=(e)=>
{

        setGender(e.target.value)
   }


  return (
    <form className='border-2 shadow-lg  flex  flex-col   lg:w-3/6  w-11/12   h-96 m-auto' onSubmit={handleRegister} >
      <div className='flex flex-col space-y-4 py-8'>
    <div className="space-y-4 space-x-0  mx-auto  px-1 flex flex-col lg:space-x-4 lg:space-y-0 lg:flex-row">
    <UserInput handleUserChange={handleUserChange}  />
    <PasswordInput   handlePasswordChange={handlePasswordChange}  />
    </div>
    <div className="mx-auto  px-1 flex flex-col space-y-4 ">
     <EmailInput   handleEmailChange={handleEmailChange}  />
   <GenderInput   gender={gender} handleGenderChange={handleGenderChange}  />
  
    </div>
  </div>
   <StyledSubmit />
</form>
  )
}
