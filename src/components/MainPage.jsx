import Twit from "./Twit";
const data=[
    {
        name :"name0",
        gender: 1,
        Id : 1, 
        content: "fdfd"
    } 
    , {
      name :"name1",
      gender: 0,
      Id : 0, 
      content: "sdfds"
  }
   , {
    name :"name2",
    gender: 0,
    Id : 1, 
    content: "fdfd"
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