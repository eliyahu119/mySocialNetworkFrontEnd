import { useState } from 'react'
import boyLogo from '../images/boyLogo.png'
import girlLogo from '../images/girlLogo.png'

//shows the profile pic
//for now the photo based on gender only (only 2 pictures).
function ProfilePic({ gender }) {
    return (
        <div className=" w-12 h-12  rounded-full  bg-blue-200   align-middle inline-flex">
            <img
                src={gender ? boyLogo : girlLogo}
                className="w-10 h-10 m-auto"
                alt="profile"
            />
        </div>
    )
}
export default ProfilePic
