import React from 'react'
import {motion} from "framer-motion";
function Experience() {
  return (
    <motion.div initial={{opacity:0}} animation={{opacity:1, transition:{duration:0.5}}}>
      Experience
    </motion.div>
  )
}

export default Experience
