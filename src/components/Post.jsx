
import ProfilePic from "./ProfilePic";
import LikeComponent from "./LikeComponent";
import Comments from "./Comments.jsx";

//the post component.
//the post and all its data is shown
function Post({data}) {
    return (
      <div className="rounded-3xl  bg-orange-50  border-orange-300 border-2  shadow-gray-300  shadow-2xl">
      <div className="   pb-2 pl-4  bg-orange-100    rounded-3xl ">
        <div className="rounded-xl max-w-sm p-2    ">
      <ProfilePic gender={data.userID.gender} />
        <div className=" p-2 font-bold  text-lg inline-flex">
          {data.userID.user}
        </div>
        <div className=' text-gray-500  text-sm'> {/** the date conteiner */}
        {new Date(data.date).formatedDate()} 
        </div>
        </div>
        <div className=" relative pl-10 pb-5 text-xl">  {/**the content conteiner */}
        {data.content}
        </div>
      <LikeComponent likes={data?.likes}  postId={data._id}/>
      </div>
      <Comments comments={data?.commentsID} postID={data._id} />
      </div>
    );
  }
  
  export default Post;