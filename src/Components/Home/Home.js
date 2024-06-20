import React from 'react'
import "./Home.css";
import myImage from '../../Assets/Images/Eventphoto.jpg';
import Leftpart from './Leftpart/Leftpart';
function Home() {
 
  return (
    <section className="home" id='home'>
      <Leftpart/>
      <div className="right">
          <img src={myImage} alt="" srcset="" />
      </div>
    </section>
  )
}

export default Home
