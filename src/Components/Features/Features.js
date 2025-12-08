import React from "react";
import Title from "../Title/Title";
import { useState } from "react";
import Card from "../Card/Card";
import { theme } from "../../Constants/theme";
import { eventCategories } from "../../Constants/EventCategories";
import { prCategories } from "../../Constants/PrCategories";

function Features() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <section
      className={`features ${theme.colors.primaryBg} h-full min-h-screen my-1 p-5 rounded-lg`}
    >
      <Title min="Features" max="What we do?" />

      {/* Tab List */}
      <ul className="flex justify-center items-center gap-6 p-5">
  {[
    { name: "Events", key: "events" },
    { name: "PR", key: "pr" }
  ].map(({ name, key }) => (
    <li
      key={key}
      onClick={() => setActiveTab(key)}
      className={`relative w-40 text-center py-4 px-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 backdrop-blur-lg border border-white/20
        ${
          activeTab === key
            ? "bg-gradient-to-r from-amber-600 to-red-500 text-white font-semibold shadow-xl scale-110 border-none"
            : "bg-white/10 text-gray-300 hover:bg-white/20"
        }`}
    >
      {name}
      {activeTab === key && (
        <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 h-1 rounded-full bg-amber-400 transition-all duration-300"></span>
      )}
    </li>
  ))}
</ul>
      {/* Dynamic Content */}
      {activeTab === "events" && (
        <div className="grid h-full gap-6 sm:grid-cols-1 overflow-y-hidden overflow-scroll md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
          {eventCategories.map((eventCategory) => (
            <Card
              title={eventCategory.title}
              des={eventCategory.description}
              icon={eventCategory.icon}
            />
          ))}
        </div>
      )}
      {activeTab === "pr" && (
        <div className="grid h-full gap-6 sm:grid-cols-1 overflow-y-hidden overflow-scroll md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
          {prCategories.map((prCategory) => (
            <Card
              title={prCategory.title}
              des={prCategory.description}
              icon={prCategory.icon}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Features;
