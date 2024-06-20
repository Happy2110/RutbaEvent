import React from 'react'
import "./Card.css"
import { HiArrowRight } from "react-icons/hi";
function Card({ title, des, icon }) {
    return (
        <div className="container group">
            <div className="first">
                <div className="second group">
                    <div>
                        <span className='icon'>
                            {icon}
                        </span>
                    </div>
                    <div className='content'>
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {des}
                        </p>
                        <span className='arrow'>
                            <HiArrowRight size={25}/>
                        </span>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card
