import {useState} from 'react'
import webSiteLogo from "../images/logo.png";
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { BsQuestionLg } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../styles/HeadLine.css'
import {MdDoubleArrow} from 'react-icons/md'

/**
 *the navbar of the project
 * @returns 
 */
export default function HeadLine() {
  const navigate = useNavigate()
  /**
   * for the stylyd  Info links
   */
  const InfoNavLink = ({ children, to, data }) => {
    return (
      <NavLink onClick={()=>{SetOpen(false)}} className={'InfoLinks'} to={to}>
        {children}
        {data}
      </NavLink>
    )
  }
  /**
   * log out componet
   */
  const LogOut = () => {
    const logOutHandler = (e) => {
      localStorage.clear();
      navigate('/login')
      SetOpen(false)
    }
    return (
      <button className='SignInLoginLinks' onClick={logOutHandler}>
        {'LogOut'}
      </button>
    )
  }

  const LogNavLink = ({ children, to }) => {
    return (
      <NavLink className='SignInLoginLinks' to={to}>
        {children}
      </NavLink>
    )
  }
   const ToggleOpen=()=>{
    SetOpen(!open);
   }
  const [open,SetOpen]=useState(false);

  return (
    <nav className={"headLine"}> {/*the navbar*/ }
    

    <img src={webSiteLogo} className={"ImageConteiner"} alt={"logo"} />
     <button onClick={ToggleOpen} className='expendButton'>
     <MdDoubleArrow className='arrow' size={60} />
     </button>
      <div  className={`linksConteiner ${open?'open':''}`}>
        <div className='InfoLinksConteiner'>  { /*general conteiner */}
        
            <InfoNavLink to={'/'} data={'Home'}>
              <GoHome />
            </InfoNavLink>
            <InfoNavLink to={'/about'} data={'About'}>
              <BsQuestionLg />
            </InfoNavLink>
            <InfoNavLink to={'/terms'} data={'Terms'}>
              <FaFileContract />
            </InfoNavLink>
     
        </div>
        <div className='LoglinksConteiner'> { /*the login and signin div */}
          {!localStorage.getItem("token") ? (
            <>
              <LogNavLink to={'/Login'}>
                {'Login'}
              </LogNavLink>
              <LogNavLink className={''} to={'/Register'}>
                {'SignIn'}
              </LogNavLink>
            </>
          )
            : (<LogOut />)
          }
        </div>
      </div>
    
    </nav>
  )
}
