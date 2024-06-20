import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import {FaInstagram,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'
import './Left.css'

function Leftpart() {
    const [text]=useTypewriter({
        words:[
          "Business & Professional events.",
          "Education & Training events.",
          "Entertainment & Culture events.",
          "Wedding & Anniversaries events.",
          "Health & Wellness events.",
          "Social & Community events.",
          "Sports & Recreation events."
        ],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        duration: 3000
      })
  return (
    <div className="left">
        <div className="top">
          <h4>
            Welcome to our world of celebration!
          </h4>
          <h1 >
            Plan your Events with
            <span>  Rutba Event </span>
          </h1>
          <h2>Celebrate your {text}
          <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="maroon"
          
          ></Cursor>
          </h2>
         <p>
         At Rutba Event, we transform moments into unforgettable memories, crafting exceptional experiences tailored to your every need. <br/>
         Let us make your next event truly extraordinary.
         </p>
        </div>
        <div className="bottom">
            FIND ME IN
            <div className="icons">
              <div className="icon">
                <FaFacebook size={40}/>
              </div>
              <div className="icon">
                <FaInstagram size={40}/>
              </div>
              <div className="icon">
                <FaLinkedin size={40}/>
              </div>
              <div className="icon">
                <FaTwitter size={40}/>
              </div>
            </div>

        </div>
      </div>
  )
}

export default Leftpart
