import React from "react";
import myImage from "../../Assets/Images/Eventphoto.jpg";
import Leftpart from "./Leftpart/Leftpart";
import { theme } from "../../Constants/theme";

function Home() {
  return (
    <section
      className={`w-full my-1 flex flex-col md:flex-row items-center justify-evenly gap-5 md:p-10 ${theme.colors.primaryBg} rounded-lg`}
    >
      {/* Left Part */}
      <Leftpart />
      {/* Right Part (Image) */}
      <div className={`w-full md:w-1/2 h-[85vh] shadow-lg`}>
        <img
          src={myImage}
          alt="Event"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default Home;
