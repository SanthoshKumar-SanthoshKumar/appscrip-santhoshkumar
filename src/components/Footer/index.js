import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { MdExpandLess } from "react-icons/md";
import './style.css'
const Footer = () => {
  return (
    <>
    <div className='desktop-view'>
    <div className='details-container'>
            <div className='updates-recomendation'>
                <h1>Be the first to know</h1>
                <p>Sign up for updates from mettā muse.</p>
                <div>
                    <input type="text" placeholder='Enter your email'/>
                    <button type="button" className='sub-btn'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='contacts'>
                <h1>CONTACT US</h1>
                <div className='contact-details'>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                <h1>CURRENCY</h1>
                <div>
                    
                    <div className='currency-details'>
                        <img width="20px" height="20px" src="https://res.cloudinary.com/dijwul6ub/image/upload/v1715499499/USD_zto68o.png" alt="United States of America (US)" />
                        <p><CiStar/></p>
                        <h4>USD</h4>
                    </div>
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
      <hr/>
      <div className='promotions-container'>
         <div className='metta-muse'>
            <h1>mettā muse</h1>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
      </div>
      <div className='quick-liks'>
        <h1>Quick Links</h1>
        <p>Orders & Shipping</p>
        <p>Join/Login as a Seller</p>
        <p>Payment & Pricing</p>
        <p>Return & Refunds</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className='scocial-medai-ad'>
        <h1>Follow Us</h1>
        <ul>
          <li><FaInstagramSquare/></li>
          <li><IoLogoLinkedin /></li>
        </ul>
          <div className='meta-mouse-accepts'>

            </div>
      </div>
      
       </div>
    </div>





    <div className='mobile-view'>
       <h1>Be the first to know</h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
       <div>
          <input type="text" placeholder='Enter your e-mail...'/>
          <button type="button">Subscribe</button>
       </div>
       <hr/>
       <div>
        <h1>Call Us</h1>
        <div className='contact-details'>
            <p>+44 221 133 5360</p>
            <p>@</p>
            <p>customercare@mettamuse.com</p>
        </div>
       </div>
       <hr/>
       <div>
        <h1>Currency</h1>
        <div className="currency-details">
            <img width="20px" height="20px" src="https://res.cloudinary.com/dijwul6ub/image/upload/v1715499499/USD_zto68o.png" alt="united State of America"/>
            <p>@</p>
            <p>USD</p>
        </div>
       </div>
       

       <div className='feature-references'>
        <h1>mettā muse</h1>
        <MdExpandLess />
       </div>
       <hr/>
       <div className='feature-references'>
        <h1>Quick Links</h1>
        <MdExpandLess />
       </div>
       <hr/>
       <div className='social-media-links'>
        <h1>Follow Us</h1>
        <MdExpandLess />
       </div>

    </div>
        
      <h5>Copyright © 2023 mettamuse. All rights reserved.</h5>
    </>
  )
}

export default Footer
