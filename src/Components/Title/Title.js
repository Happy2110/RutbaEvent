import React from 'react'
import "./Title.css"
function Title({min, max}) {
  return (
    <div className="title">
   <h3>
        {min}
    </h3>
    <h1>{max}</h1>
   </div>
  )
}

export default Title
