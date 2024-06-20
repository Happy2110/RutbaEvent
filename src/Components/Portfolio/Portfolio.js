import React, { useState } from 'react'
import Title from "../Title/Title";
import "./Portfolio.css"
import Member from '../Members/Member';
import { memberList } from '../../Constants/MemberList';
import Rating from '../Rating/Rating';
import Experience from '../Experience/Experience';
import Achievement from '../Achievement/Achievement';
function Portfolio() {
  
  const [activeTab, setActiveTab] = useState("ourMember");
  function handleTab(tabname){
    setActiveTab(tabname);
  }
  return (

    <section id='portfolio'>
      <div className="portfolio-container">
        <Title min="The year of Experience" max="Our Portfolio" />
        <ul className='p-list'>
          <li onClick={() => (
            handleTab("ourMember")
          )} className={`list-item ${activeTab==='ourMember'?"list-item-active":''}`}>Our Members</li>

          <li onClick={() => (
            handleTab('rating')
          )} className={`list-item ${activeTab==='rating'?"list-item-active":''}`}>Rating</li>

          <li onClick={() => (
            handleTab('experience')
          )} className={`list-item ${activeTab==='experience'?"list-item-active":''}`}>Experience</li>

          <li onClick={() => (
            handleTab('achievement')
          )} className={`list-item ${activeTab==='achievement'?"list-item-active":''}`}>Achievements</li>
        </ul>
      </div>

      {
        activeTab==="ourMember" &&
        <div className="members" >
          {memberList.map(({ name, dept, link }) => (
            <Member name={name} dept={dept} link={link} />
          ))}

        </div>
      }
      {
        activeTab==="rating" &&
        <Rating />
      }
      {
        activeTab==="achievement" &&
        <Achievement/>
      }
      {
        activeTab==="experience" &&
        <Experience />
      }
      
    </section >
  )
}

export default Portfolio
