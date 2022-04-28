import { useEffect, useState } from "react";
import axios from "axios";
//import"../styles/LikeComponent.css";
import "../styles/like.css";


//the like component
const LikeComponent = ({ likes, postId, commentId = null }) => {
    const [countlikes, setcountlikes] = useState(likes?.length || 0)
    const [clicked, setClicked] = useState(false); //TODO::  CHECK IF  USER HAS LIKED GET INFO IF THE 

    useEffect(() => {

        if (likes != null) {

            const userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (likes.includes(userInfo._id)) {
                setClicked(true)
            }
        }
    }, [])

    const HasClicked = () => {
        const url = `post/${postId}/${commentId ? `comment/${commentId}` : ''}/like`
        SendMethod(url).then(res => res.data).then(frontEndclickAction())
                .catch(e => console.log(e))
    }
    async function SendMethod(url)  {
        if (!clicked) {
            return (
              await  axios.post(url, {},
                    {
                        headers: {
                            'x-access-token': localStorage.getItem('token')
                        }
                    }
                ));
        }
   
        return (
            await  axios.delete(url, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }
            ));

    }

    const frontEndclickAction = () => {
        clicked ? setcountlikes(countlikes - 1) : setcountlikes(countlikes + 1);
        setClicked(!clicked);
    }
    return (
        <div>
            <p className="text-sm text-center   text-gray-400 w-20">{`${countlikes} ❤`}</p>
            {/* <button onClick={HasClicked} className={`LikeComponent ${clicked?"ClikedLike":""} `}>{countlikes}</button> */}
            <button onClick={HasClicked} className={`like-button ${clicked ? 'liked' : ''}`} id="wow">
                <span className='like-icon'>
                    <div className='heart-animation-1'></div>
                    <div className='heart-animation-2'></div>
                </span>
                Like
            </button>
        </div>
    );
}

export default LikeComponent;