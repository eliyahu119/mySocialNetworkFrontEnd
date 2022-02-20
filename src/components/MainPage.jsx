import Twit from "./Twit";
import {useState,useEffect} from "react";
import LoadingElement from "./LoadingElement";
import '../styles/MainPage.css' 
const data=[
    {
        name :"eliyahu",
        gender: 1,
        Id : 1, 
        content: "hello world!"
    } 
    , {
      name :"עירית נבון",
      gender: 0,
      Id : 0, 
      content: "יוקר המחיה זה חרא"
  }
   , { 
    name :"הגגג גגגג גגגגגג גג גגג גגגגגג  גגג גג גג גג  גגג גגג גג",
    gender: 0,
    Id : 1, 
    content: "קקי קקי קקי "
   }
  ] 

//the main page of the project.
function MainPage() {
  //  const [data,SetData] =useState()
   const [Sent,setSent]=useState(false);
  useEffect(() => {
    // fetch.get('https://itpro2017.herokuapp.com/api/products')
    //      .then ((result) => {
    //         SetData(result.data);
    //         setSent(true);
    //          console.log(result + ' data');    
    //      })
    //      .catch ((error) => {
    //          console.log(error);
    //      })
    const timer = setTimeout(() => {
      setSent(true)
    }, 1000);
  
  }, [])
    return (
    <>
    <div className={"border-b-2 border-blue-200 p-10 bg-sky-100"}>headline</div>
     <div className="mainPage">
        {Sent?data.map(data=>Twit({data})):(<LoadingElement />)}
        {/* {data.map(data=>Twit({data}))} */}
     </div>
     </>
    );
  }
  
  export default MainPage;