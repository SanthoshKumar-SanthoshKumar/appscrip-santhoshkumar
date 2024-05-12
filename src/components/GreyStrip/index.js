import React from 'react'
import { FaQrcode } from "react-icons/fa6";
import './style.css'
const GreyStrip = () => {
  return (
    <div>
       <div className="desktop">
        <div>
          <FaQrcode />
           <p>Lorem Ipsum doller</p>
        </div>
        <div>
          <FaQrcode />
           <p>Lorem Ipsum doller</p>
        </div>
        <div>
          <FaQrcode />
           <p>Lorem Ipsum doller</p>
        </div>
       </div>
       
       <div className='mobile'>
       <div>
          <FaQrcode />
           <p>Lorem Ipsum doller</p>
        </div>
       </div>
    </div>
  )
}

export default GreyStrip