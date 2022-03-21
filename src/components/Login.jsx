import { StyledSubmit } from './inputs/StyledSubmit';
import { PasswordInput } from './inputs/Passwordinput';
import { UserInput } from './inputs/Userinput';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useIsUserAuth from "../hooks/useIsUserAuth";
import { useAlert } from 'react-alert';
import { NavLink } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const alert=useAlert()
    


    const handleLogin = (event) => {
        event.preventDefault();
        const logInfo = {
            password,
            user
        }
        axios.post('/login',logInfo).then(
            res=>res.data).then(
            data=>{
            localStorage.setItem("token",data.token);
            localStorage.setItem("userInfo",JSON.stringify(data.userInfo))
            navigate('/')
        }
            ).catch(
                //TODO:: put here some kind of alert error to inform the user 
                (e)=>{
                   e.response&&e.response.data&&alert.error((e.response.data.message||"Cannot connect the server"))
                }
            )
    }

   useIsUserAuth();

    const handleUserChange = (e) => {
        setUser(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (

          <form className= 'flex  flex-col justify-between  lg:w-3/6  w-11/12   h-96 m-auto' onSubmit={handleLogin} >
            <div className="  space-y-6 space-x-0  mx-auto py-12 px-1 flex flex-col lg:space-x-4 lg:space-y-0 lg:flex-row">
            <UserInput handleUserChange={handleUserChange}  />
            <PasswordInput   handlePasswordChange={handlePasswordChange}  />
           </div>
            <p className=' m-auto text-bs text-orange-500 font-semibold lg:text-xl'>{"Don't have a user yet? "} 
            <NavLink className='' to={'/Register'}>
             <u className=' hover:text-orange-700'>
             <i >
             Register now!
             </i>
             </u>
            </NavLink>
            </p>
           <StyledSubmit     />        </form>
    )

        
  } 