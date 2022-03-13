
import ProfilePic from "./ProfilePic"
import LikeComponent from './LikeComponent';




const Comment=({comment})=> {
    return (
        <div className='border-2 border-black rounded-3xl  m-3  p-2  shadow-lg    bg-violet-50'>
        <ProfilePic gender={comment.userID.gender} />
          <div className=" inline-block text-left font-bold p-1 align-middle"> {/*the name container*/ }
            {comment.userID.user}
          </div>
          <p className=' text-gray-500  text-xs'> {/** the date conteiner */}
      {new Date(comment.date).formatedDate()} 
         </p>
        <p className=' text-base p-3' >
         {comment.content}
        </p>
       <LikeComponent likes={comment.likes} ID={comment._id} />
        </div>
    )
  }


  export default  Comment