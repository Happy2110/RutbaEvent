import React from 'react'
import "./About.css"
import Title from "../Title/Title";
function About() {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
  
  return (
    <section id="aboutus">
      <div className="about-container">
      <Title min="Story of our begining..." max="About us"/>
      <div className="sliderContainer">
        <div className="slider">
        <img id="slide1" src="https://i.pinimg.com/564x/24/db/a5/24dba58b4ded9757a0886bb2d65a7b75.jpg" alt="" />
        <img id='slide2' src="https://i.pinimg.com/564x/d0/eb/9b/d0eb9b9b413d2d546a1f054b6edace1c.jpg" alt="" />
        <img id='slide3' src="https://i.pinimg.com/564x/cb/f8/7a/cbf87ad3da1bd7c88ea6e0dd04a18131.jpg" alt="" />
        </div>
        <div className="sliderbtn">
        <a href="#slide1" onClick={handleClick}></a>
        <a href="#slide2" onClick={handleClick}></a>
        <a href="#slide3" onClick={handleClick}></a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
