import { GrBusinessService } from "react-icons/gr";
import { GiGlassCelebration } from "react-icons/gi";
import { MdCastForEducation, MdHealthAndSafety, MdTempleBuddhist } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FcSportsMode } from "react-icons/fc";

export const eventCategories = [
    {
      title: "Business & Professional Events",
      description: "We excel in organizing corporate conferences, seminars, and networking events to boost your professional presence.",
      icon: <GrBusinessService size={50} />,
    },
    {
      title: "Marriage, Anniversary & B'day Celebrations",
      description: "Celebrate special moments with personalized events that bring joy and memories.",
      icon: <GiGlassCelebration size={50} />,
    },
    {
      title: "Education & Training Sessions",
      description: "From workshops to educational seminars, we offer comprehensive learning experiences tailored to your needs.",
      icon: <MdCastForEducation size={50} />,
    },
    {
      title: "Entertainment & Culture Shows",
      description: "Experience vibrant cultural performances, concerts, and entertainment spectacles that leave a lasting impression.",
      icon: <MdTempleBuddhist size={50} />,
    },
    {
      title: "Health & Wellness Programs",
      description: "Promote well-being with our wellness retreats, fitness events, and health-focused workshops designed to rejuvenate mind and body.",
      icon: <MdHealthAndSafety size={50} />,
    },
    {
      title: "Social & Community Gatherings",
      description: "Build meaningful connections through our community events, social gatherings, and networking opportunities.",
      icon: <TbSocial size={50} />,
    },
    {
      title: "Sports & Recreation Activities",
      description: "Get active and engaged with our sports tournaments, outdoor adventures, and recreational activities suitable for all ages.",
      icon: <FcSportsMode size={50} />,
    },
  ];
  