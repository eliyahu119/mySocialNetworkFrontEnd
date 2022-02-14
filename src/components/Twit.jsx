
import ProfilePic from "./ProfilePic";
import LikeComponent from "./LikeComponent";

//the twit component.
//the tweet and all its data is shown
function Twit({data}) {
    return (
      <div className="Twit">
        <div className="userInfo">
      <ProfilePic gender={data.gender} />
        <div className="Name">
          {data.name}
        </div>
        </div>
        <div className="Content">
           {data.content}
        </div>
      <LikeComponent />
      </div>
    );
  }
  
  export default Twit;