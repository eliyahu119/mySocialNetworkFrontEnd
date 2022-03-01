import Twit from "./Twit";
import {useState,useEffect} from "react";
import LoadingElement from "./LoadingElement";
import { useNavigate } from "react-router-dom";
import HeadLine from "./HeadLine";
import '../styles/MainPage.css' 
import axios from "axios";

//the main page of the project.
function MainPage() {
   const [data,SetData] = useState();
   const [Sent,setSent]=useState(false);
   const navigate = useNavigate();
  useEffect(() => {
   localStorage.getItem('token')|| navigate('\login') //if there isnt any jwt  
   axios.get('http://127.0.0.1:80/getData',{
     headers: {
        //TODO: REMOVE THAT  and add
       'x-access-token':localStorage.getItem('token')
     }
   }
     ).then(result=>result.data)
          .then ((data) => {
             SetData(data);
              setSent(true);  
          })
          .catch ((error) => {
            if(error.response)
            {
               if(error.response.status===401)
               {
                  localStorage.removeItem('token')
                  navigate('\login')
               }
            } 
            console.log(error);
          })
          
  //   const timer = setTimeout(() => {
  //     setSent(true)
  //   }, 1000);
  
  }, [])
    return (
   
    
     <div className="mainPage">
        {/* {Sent?data.map(data=>(<Twit data={data} key={data.Id} />)):(<LoadingElement />)} */}
        {Sent?data.map(data=>(<Twit data={data} key={data._id} />)):(<LoadingElement />)}
        {/* {data.map(data=>Twit({data}))} */}
     </div>
     
    );
  }
  
  export default MainPage;