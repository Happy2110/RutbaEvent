import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { theme } from "../../../Constants/theme";
function LeftPart() {
  const [text] = useTypewriter({
    words: [
      "Business & Professional events.",
      "Education & Training events.",
      "Entertainment & Culture events.",
      "Wedding & Anniversaries events.",
      "Health & Wellness events.",
      "Social & Community events.",
      "Sports & Recreation events.",
    ],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 3000,
  });

  return (
    <div
      className={`w-full font-sans md:w-1/2 flex flex-col justify-between p-2 md:p-8 ${theme.colors.primaryBg}`}
    >
      {/* Top Section */}
      <div className="text-center md:text-left">
        <h4 className={`${theme.text.heading} ${theme.colors.accentGold} font-bold`}>
          Welcome to our world of celebration!
        </h4>
        <h1
          className={`text-xl md:text-xl font-bold ${theme.colors.textClr} mt-2`}
        >
          Plan your Events with{" "}
          <span className={`${theme.colors.accentGold} text-2xl`}>Rutba Event</span>
        </h1>
        <div className="h-10 flex items-center">
          <h2 className={`text-lg md:font-medium ${theme.colors.primaryText}`}>
            Celebrate your {text}
            <Cursor cursorStyle="|" cursorColor="#d4af37" />
          </h2>
        </div>
        <p className={`text-md ${theme.colors.textClr} my-2`}>
          At Rutba Event, we transform moments into unforgettable memories,
          crafting exceptional experiences tailored to your every need. <br />
          Let us make your next event truly extraordinary.
        </p>
      </div>

      {/* Social Icons Section */}
      <div className="mt-6 text-center md:text-left">
        <p className={`font-semibold mb-2 ${theme.colors.accentGold}`}>
          FIND ME IN
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {[
            { icon: FaFacebook, name: "Facebook" },
            { icon: FaInstagram, name: "Instagram" },
            { icon: FaLinkedin, name: "LinkedIn" },
            { icon: FaTwitter, name: "Twitter" },
          ].map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              className={`p-2 ${theme.colors.primary} ${theme.colors.buttonHover} transition duration-300 rounded-md shadow-md cursor-pointer`}
              title={name}
            >
              <Icon size={30} className="text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPart;
