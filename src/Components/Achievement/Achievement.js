import React from 'react'
import {motion} from "framer-motion";
function Achievement() {
  return (
    <motion.div initial={{opacity:0}} animation={{opacity:1, transition:{duration:0.5}}}>
      Achievement
    </motion.div>
  )
}

export default Achievement
