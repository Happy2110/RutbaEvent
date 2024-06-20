import React from 'react'
import './Member.css';

function Member({ name, dept, link }) {
    return (
        <div className="team-member">
            <div className="member-photo">
                <img src={link} alt="" />
            </div>
            <div className="member-details">
                <h1>{name}</h1>
                <h2>{dept}</h2>
            </div>
        </div>
    )
}

export default Member
