import React, { useState } from "react";
import Title from "../Title/Title";
import Member from "../Members/Member";
import { memberList } from "../../Constants/MemberList";
import Rating from "../Rating/Rating";
import Experience from "../Experience/Experience";
import Achievement from "../Achievement/Achievement";
import { theme } from "../../Constants/theme";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("ourMember");

  return (
    <section id="portfolio" className={`my-1 theme rounded-lg ${theme.colors.primaryBg} min-h-screen p-5 flex flex-col gap-5`}>
      <div className="">
        <Title min="The Year of Experience" max="Our Portfolio" />
      </div>

      {/* Tab List */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {[
          { name: "Our Members", key: "ourMember" },
          { name: "Rating", key: "rating" },
          { name: "Experience", key: "experience" },
          { name: "Achievements", key: "achievement" },
        ].map(({ name, key }) => (
          <li
            key={key}
            onClick={() => setActiveTab(key)}
            className={`bg-white text-center py-3 px-4 rounded-lg shadow-md cursor-pointer transition-all ${
              activeTab === key
                ? "text-black font-semibold border-2 border-red-400"
                : "hover:border-red-400"
            }`}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Dynamic Content */}
      {activeTab === "ourMember" && (
        <div className="min-h-[60vh] flex flex-wrap justify-center items-center gap-6 rounded-lg">
          {memberList.map((member) => (
            <Member key={member.name} member={member} />
          ))}
        </div>
      )}

      {activeTab === "rating" && <Rating />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "achievement" && <Achievement />}
    </section>
  );
}

export default Portfolio;
