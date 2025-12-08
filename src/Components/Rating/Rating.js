import React from "react";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import OperationalSkillChart from "../../Charts/HorizontalBarChart/OperationalSkillChart";
import InterpersonalSkillChart from "../../Charts/HorizontalBarChart/InterpersonalSkillChart";

function Rating() {
  return (
    <motion.div 
      className="flex justify-center items-center w-full flex-wrap gap-4 p-4"
    >
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        <Title min="Analysis" max="Operational Skills" />
          <OperationalSkillChart />
      </div>

      <div className="w-full md:w-1/3  flex flex-col items-center">
        <Title min="Analysis" max="Interpersonal Skills" />
          <InterpersonalSkillChart />

      </div>
    </motion.div>
  );
}

export default Rating;
