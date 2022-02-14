import Twit from "./Twit";
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
function MainPage() {
    return (
     <div className="mainPage">
       {data.map(data=>Twit({data}))}
     </div>
    );
  }
  
  export default MainPage;