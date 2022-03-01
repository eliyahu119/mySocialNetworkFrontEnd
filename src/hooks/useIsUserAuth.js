import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * check if the use is authintacted with the server
 * if not then remove the false token if exist.
 */
export default function useIsUserAuth() {
   const navigate=useNavigate()
    useEffect(() => {
        axios.get('http://127.0.0.1:80/isUserAuth',{
            headers:{
               'x-access-token':localStorage.getItem('token')
            }
        }).then(
         result=>
          result.data).then(data=>data.isLoggedIn?navigate('/'):null
          ).catch(
           e=>{localStorage.getItem('token')&&localStorage.removeItem('token')}     
         )
     }, [])
}

