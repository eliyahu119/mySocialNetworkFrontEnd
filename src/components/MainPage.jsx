import Twit from "./Twit";
import {useState,useEffect} from "react";
import LoadingElement from "./LoadingElement";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostWriter from "./PostWriter";
import {setCommentContext} from '../contex/setCommentContext'
import {reverseArr} from '../helpFunctions/utils.js'

//the main page of the project.
function MainPage() {
   const [data,SetData] = useState();
   const [Sent,setSent]=useState(false);
   const navigate = useNavigate();

const MaipageClasses=''
  useEffect(() => {
   localStorage.getItem('token') || navigate('/login'); //if there isnt any jwt  
      axios.get('/getData', {
         headers: {
            'x-access-token': localStorage.getItem('token')
         }
      }
      ).then(result => result.data)
         .then((data) => {
            SetData(reverseArr(data)
            // .map(
            //    (item)=>{
            //       item.commentsID&&(item.commentsID=reverseArr(item.commentsID))
            //       return item
            //    }
            //    )
               )
            setSent(true);
         })
         .catch((error) => {
            if (error.response) {
               if (error.response.status === 401) {
                  localStorage.clear();
                  navigate('/login');
               }
            }
            console.log(error);
         });

   return ()=>{ 
      setSent(false);
      SetData([])
   }
   }, [navigate])
   /**
    * 
    * @param {*} post 
    */

   const Addpost=(post)=>{
      SetData([post].concat(data))
   }
   /**
    * add comment to data
    * @param {} postID 
    * @param {*} newComment 
    */
   const addComment=(postID,newComment)=>{
      SetData(data.map(
         post=>{
               if(post._id===postID)
               {
                post.commentsID=post.commentsID?[newComment].concat(post.commentsID):[newComment]     
                return post
               }
               else
               return post
            }
      ))
   }

   if(Sent){
      return (
         
         <div className={'lg:px-32  lg:max-w-6xl  space-y-6 bg-pink-50 block m-auto lg:shadow-2xl py-5'}>
            <PostWriter Addpost={Addpost}/>
            <setCommentContext.Provider value={addComment}>
            {data.map(data=>(<Twit data={data} key={data._id} />))}
         </setCommentContext.Provider>
         </div>
        );
      }
      /**
       * returns loader
       */
    return (
     <div className={'lg:px-32  lg:max-w-6xl px-3 space-y-6 bg-pink-50 block m-auto '}>
        <div className="flex  justify-center m-0 align-middle ">
       <LoadingElement />
        </div>
     </div>
     
    );
    

  }
  
  export default MainPage;