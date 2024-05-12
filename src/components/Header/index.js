import React ,{useState}from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

import GreyStrip from '../GreyStrip';
// import { FaQrcode } from "react-icons/fa";

import  './style.css'

const Header = () => {
  const [menuOpen ,setMenuOpen] = useState(false)
  return (
    <>
    <GreyStrip/>
    <div className='header-container'>
       <div className='srtrip-container'>
        <div>
          <p className='menu-icon' onClick={()=>{setMenuOpen(!menuOpen)}}><MdMenu /></p> 

          <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1715422832/Logo_yy3lrh.png" alt="header-logo"/>
          </div>
          <h1>LOGO</h1>
          <div className='icons-container'>
            <ul>
                <li><CiSearch /></li>
                <li><IoIosHeartEmpty/></li>
                <li><HiOutlineShoppingBag /></li>
                <li><CgProfile /></li>
            </ul> 
             <select>
                <option value="eng" selected>ENG</option>
                <option value="ind">India</option>
             </select>
          </div>
          </div>
          <nav className='tabs-container'>
            <ul className={menuOpen ? 'open':""}>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
          </nav>
    </div>
    </>
  )
}

export default Header
