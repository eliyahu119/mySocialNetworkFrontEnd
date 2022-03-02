
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useIsUserAuth from "../hooks/useIsUserAuth";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')



    const handleLogin = (event) => {
        event.preventDefault();
        const logInfo = {
            password,
            user
        }
        axios.post('http://127.0.0.1:80/login',logInfo).then(
            res=>res.data).then(
            data=>{
            localStorage.setItem("token",data.token);
            localStorage.setItem("userInfo",JSON.stringify(data.userInfo))
            navigate('/')
        }
            ).catch(
                //TODO:: put here some kind of alert error to inform the user 
                (e)=>console.log(e)
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

          <form className='LoginFormClass' onSubmit={handleLogin} >
            <input className="userClass" onChange={handleUserChange} required type="user" />
            <input className="passwordClass" onChange={handlePasswordChange} required type="password" />
            <input  className='SubmitClass' type = "submit" value = "Submit" />
            {/* <button className="submitClass" onClick={handleLogin} >{"בראש ניתן"}</button> */}
        </form>
    )
} 