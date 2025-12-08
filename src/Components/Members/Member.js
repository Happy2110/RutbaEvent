import React from "react";
import SocialMediaCard from "../Card/SocialMediaCard";

function Member({ member }) {
  return (
    <div className="h-[45vh] w-[45vh] p-3 flex flex-col items-center justify-center border-4 border-white rounded-br-2xl rounded-tl-2xl shadow-lg">
      {/* Image */}
      <div className="h-[30vh] w-[30vh] overflow-hidden rounded-br-2xl rounded-tl-2xl shadow-lg">
        <img src={member.link} alt={member.name} className="h-full w-full object-cover" />
      </div>

      {/* Member Details */}
      <div className="text-center mt-3">
        <h1 className="text-xl font-semibold text-white">{member.name}</h1>
        <h2 className="text-md font-medium text-red-700">{member.dept}</h2>
      </div>
      <SocialMediaCard member={member}/>
    </div>
  );
}

export default Member;
