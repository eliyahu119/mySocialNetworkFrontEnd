import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * check if the use is authintacted with the server
 * if authintacted send the user to the main page. 
 * if not then remove the false token if exist.
 */
export default function useIsUserAuth() {
   const navigate=useNavigate()
    useEffect(() => {
        axios.get('/isUserAuth',{
            headers:{
               'x-access-token':localStorage.getItem('token')
            }
        }).then(
         result=>
          result.data).then(data=>{data.isLoggedIn&&navigate('/')}
          ).catch(
           e=>{
               localStorage.clear();
            }     
         )
     }, [])
}

