import {useState} from 'react'
import { NavLink } from 'react-router-dom'
// import { GoHome } from "react-icons/go";
// import { BsQuestionLg } from "react-icons/bs";
// import { FaFileContract } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../styles/HeadLine.css'
import {MdDoubleArrow} from 'react-icons/md'

/**
 *the navbar of the project ( responsive to web)
 * @returns 
 */
export default function HeadLine() {
  const navigate = useNavigate()
  /**
   * for the stylyd  Info links
   */

  /**
   * log out componet
   */




  const [open,SetOpen]=useState(false);
  const ToggleOpen=()=>{
    SetOpen(!open);
    document.body.classList.toggle('open')
  }
  const constCloseOpenWindow=()=>{
    SetOpen(false);
    document.body.classList.remove('open')
  }
  

  const logOutHandler = (e) => {
    localStorage.clear();
    navigate('/login')
    constCloseOpenWindow();
  }

  return (
    <nav className={`headLine  ${open?'open':''} `}> {/*the navbar*/ }


    <i className='z-20'>
        <h1 className="ImageConteiner">MYSN</h1>
    </i>
     <button onClick={ToggleOpen} className='expendButton'>
     <MdDoubleArrow className='arrow' size={60} />
     </button>
      <div  className={`linksConteiner ${open?'open':''}`}>
        <div className='InfoLinksConteiner'>  { /*general conteiner */}
        
        <NavLink onClick={constCloseOpenWindow} className={'InfoLinks'} to={'/'} >
              {'Home'}
              {/* <GoHome /> */}
            </NavLink>
            <NavLink onClick={constCloseOpenWindow} className={'InfoLinks'} to={'/about'}>
              {'About'}
              {/* <BsQuestionLg /> */}
            </NavLink>
            <NavLink   onClick={constCloseOpenWindow } className={'InfoLinks'} to={'/terms'}>
            {'Terms'}
              {/* <FaFileContract /> */}
            </NavLink>
     
        </div>
        <div className='LoglinksConteiner'> { /*the login and signin div */}
          {!localStorage.getItem("token") ? (
            <>
            <NavLink onClick={constCloseOpenWindow} className='SignInLoginLinks' to={'/Login'}>
               {'Login'}
            </NavLink>
             
              <NavLink onClick={constCloseOpenWindow} className={'SignInLoginLinks'} to={'/Register'}>
                {'SignIn'}
              </NavLink>
            </>
          )
          : 
          (
             <button className='SignInLoginLinks' onClick={logOutHandler}>
              {'LogOut'}
             </button>
            )
          }
        </div>
      </div>
    </nav>
  )
}
