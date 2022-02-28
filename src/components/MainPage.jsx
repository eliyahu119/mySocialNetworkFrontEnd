import Twit from "./Twit";
import {useState,useEffect} from "react";
import LoadingElement from "./LoadingElement";
import HeadLine from "./HeadLine";
import '../styles/MainPage.css' 
// const data=[
//     {
//         name :"eliyahu",
//         gender: 1,
//         Id : 1, 
//         content: "hello world!"
//     } 
//     , {
//       name :"עירית נבון",
//       gender: 0,
//       Id : 0, 
//       content: "יוקר המחיה זה חרא"
//   }
//    , { 
//     name :"הגגג גגגג גגגגגג גג גגג גגגגגג  גגג גג גג גג  גגג גגג גג",
//     gender: 0,
//     Id : 2, 
//     content: "קקי קקי קקי "
//    }
//   ] 

//the main page of the project.
function MainPage() {
   const [data,SetData] = useState();
   const [Sent,setSent]=useState(false);
  useEffect(() => {
     fetch('http://127.0.0.1:80/getData',{
     headers: {
        //TODO: REMOVE THAT  and add
       'x-access-token':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJhN2I4NGFkZTljZDdlYmU3ZWY0NiIsInVzZXIiOiJFbG5hdGFuMTEiLCJnZW5kZXIiOnRydWUsImlhdCI6MTY0NTk4NzUwNSwiZXhwIjoxNjQ4NTc5NTA1fQ.nnrq99RBO8vQf5Qoh6NslPPb4LAEpOTIpPOI8-_nnno',
     }
   }
     ).then(result=>result.json())
          .then ((result) => {
             SetData(result);
              setSent(true);  
          })
          .catch ((error) => {
              console.log(error);
          })
  //   const timer = setTimeout(() => {
  //     setSent(true)
  //   }, 1000);
  
  }, [])
    return (
   
    
     <div className="mainPage">
        {/* {Sent?data.map(data=>(<Twit data={data} key={data.Id} />)):(<LoadingElement />)} */}
        {Sent?data.map(data=>(<Twit data={data} key={data.Id} />)):(<LoadingElement />)}
        {/* {data.map(data=>Twit({data}))} */}
     </div>
     
    );
  }
  
  export default MainPage;