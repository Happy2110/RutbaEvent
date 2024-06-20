import React from 'react'
import Title from '../Title/Title'
import './Rating.css'
import { motion } from "framer-motion";
import OperationalSkillChart from '../../Charts/HorizontalBarChart/OperationalSkillChart';
import InterpersonalSkillChart from '../../Charts/HorizontalBarChart/InterpersonalSkillChart';
function Rating() {
    return (
        <motion.div className="rating-container" >
            <div className="rating-left-box">
                <Title min={"Analysis"} max={"Operational skills"} />
                <div style={{ width: '45vw', height: '45vw', margin: 'auto' }}>
                    <OperationalSkillChart />
                </div>
            </div>
            <div className="rating-right-box">
                <Title min={"Analysis"} max={"Interpersonal Skills"} />
                <div style={{ width: '45vw', height: '45vw', margin: 'auto' }}>
                    <InterpersonalSkillChart />
                </div>
            </div>
        </motion.div>
    )
}

export default Rating
