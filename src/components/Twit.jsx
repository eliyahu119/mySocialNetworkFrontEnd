
import ProfilePic from "./ProfilePic";


function Twit({data}) {
    return (
      <div className="Twit">
      <ProfilePic gender={data.gender} />
        <div className="Name">
          {data.name}
        </div>
        <div className="Content">
           {data.content}
        </div>
      </div>
    );
  }
  
  export default Twit;