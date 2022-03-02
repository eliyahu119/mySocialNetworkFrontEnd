import Twit from "./Twit";
import {useState,useEffect} from "react";
import LoadingElement from "./LoadingElement";
import { useNavigate } from "react-router-dom";
import HeadLine from "./HeadLine";
import '../styles/MainPage.css' 
import axios from "axios";
import PostWriter from "./PostWriter";

//the main page of the project.
function MainPage() {
   const [data,SetData] = useState();
   const [Sent,setSent]=useState(false);
   const navigate = useNavigate();
  useEffect(() => {
   getDataFromSerever();
   //check if data is correct and user info wasnt deleted
   }, [])
   const Addpost=(post)=>{
      SetData([post].concat(data))
   }
   if(Sent){
      return (
         <div className="mainPage">
            <PostWriter Addpost={Addpost}/>
            {data.map(data=>(<Twit data={data} key={data._id} />))}
         </div>
        );
      }
    return (
     <div className="mainPage">
       <LoadingElement />
     </div>
     
    );
   function getDataFromSerever() {
      setSent(false);
      localStorage.getItem('token') || navigate('\login'); //if there isnt any jwt  
      axios.get('http://127.0.0.1:80/getData', {
         headers: {
            //TODO: REMOVE THAT  and add
            'x-access-token': localStorage.getItem('token')
         }
      }
      ).then(result => result.data)
         .then((data) => {
            SetData(data);
            setSent(true);
         })
         .catch((error) => {
            if (error.response) {
               if (error.response.status === 401) {
                  localStorage.clear();
                  navigate('\login');
               }
            }
            console.log(error);
         });
   }
  }
  
  export default MainPage;