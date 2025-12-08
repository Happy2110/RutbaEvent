import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialMediaCard({ member }) {
  const icons = {
    facebook: FaFacebook,
    linkedIn: FaLinkedin,
    instagram: FaInstagram,
    twitter: FaTwitter,
  };

  return (
    <div className="flex justify-center space-x-4 mt-2">
      {Object.keys(icons).map((key) => {
        if (member[key]) {
          const IconComponent = icons[key];
          return (
            <a
              key={key}
              href={member[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <IconComponent className="text-[#f7efe9] hover:text-[#f9f8f7] text-2xl" />
            </a>
          );
        }
        return null;
      })}
    </div>
  );
}

export default SocialMediaCard;
