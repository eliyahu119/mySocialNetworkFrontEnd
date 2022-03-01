
import ProfilePic from "./ProfilePic";
import LikeComponent from "./LikeComponent";
import Comments from "./Comments.jsx";

//the twit component.
//the tweet and all its data is shown
function Twit({data}) {
    return (
      <div>
      <div className="Twit">
        <div className="userInfo">
      <ProfilePic gender={data.userID.gender} />
        <div className="Name">
          {data.userID.user}
        </div>
        </div>
        <div className="Content">
           {data.content}
        </div>
      <LikeComponent likes={data?.likes}  ID={data._id}/>
      </div>
      <Comments comments={data?.commentsID} />
      </div>
    );
  }
  
  export default Twit;