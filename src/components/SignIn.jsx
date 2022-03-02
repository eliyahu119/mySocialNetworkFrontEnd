
import { useState } from 'react'
import useIsUserAuth from '../hooks/useIsUserAuth'
import axios from 'axios'
export default function SignIn() {
  //const navigate = useNavigate();
  //TODO:: REMOVE COMMENT
  //useIsUserAuth()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState(1)

   
    const handleChange=(e)=>
    {
       switch (e.target.id) {
        case 'RegisterUser':{
            setUser(e.target.value)
            break;
        }
        case 'RegisterEmail':{
            setPassword(e.target.value)
            break;
        }
        case 'RegisterPassword':{
            setEmail(e.target.value)

            break;
        }
        case 'RegisterGender':{
            setGender(e.target.value)
            break;
        }


       }
    



}

const handleRegister=(event)=>{
    event.preventDefault();
    const SignInfo = {
        password,
        user,
        email,
        gender:!!gender
    }
    axios.post('http://127.0.0.1:80/signin',SignInfo).then(
        res=>res.data).then(
        data=>{ 
            //TODO::put here some alert
            console.log(data.message)
    }).catch(
            //TODO:: put here some kind of alert error to inform the user 
            (e)=>console.log(e)
            )
}


  return (
    <form className='RegisterFormClass' onSubmit={handleRegister} >
    <input className="userClass" id='RegisterUser' onChange={handleChange} required type="user" />
    <input className="passwordClass" id='RegisterPassword' onChange={handleChange} required type="password" />
    <input className="emailClass" id='RegisterEmail' onChange={handleChange} required type="email" />
    {/* <input className="genderClass" id='RegisterGender' onChange={handleChange} required type="password" /> */}
    <select className="genderClass" id='RegisterGender' value={gender} onChange={handleChange}>
            <option value={1}>Male</option>
            <option value={0}>Female </option>
          </select>
    <input  className='SubmitClass' type = "submit" value = "Submit" />
    {/* <button className="submitClass" onClick={handleLogin} >{"בראש ניתן"}</button> */}
</form>
  )
}
