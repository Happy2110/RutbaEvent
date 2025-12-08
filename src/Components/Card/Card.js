import React from "react";

function Card({ title, des, icon }) {
  return (
    <div className="group relative bg-orange-100 max-w-64 h-64 p-6 flex flex-col justify-center rounded-xl shadow-md transition-all duration-500 hover:bg-orange-200 hover:shadow-lg cursor-pointer">
      {/* Content Wrapper (Moves Up on Hover) */}
      <div className="flex flex-col items-center gap-4 transition-transform duration-500 group-hover:-translate-y-3">
        {/* Icon */}
        <div className="text-red-500 text-4xl">{icon}</div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-maroon-800">{title}</h2>
          <p className="text-sm text-red-700">{des}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
