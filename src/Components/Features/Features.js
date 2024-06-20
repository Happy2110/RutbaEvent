import React from "react";
import Title from "../Title/Title";
import Card from "../Card/Card";
import { GrBusinessService } from "react-icons/gr";
import { GiGlassCelebration } from "react-icons/gi";
import { MdCastForEducation,MdHealthAndSafety,MdTempleBuddhist} from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FcSportsMode } from "react-icons/fc";

import "./Features.css";
function Features() {
  return (
    <section className="features" id="features">
      <Title min="Features" max="What we do?" />
      <div className="main-container">
        <Card
          title="Business & Professional Events"
          des="We excel in organizing corporate conferences, seminars, 
                    and networking events to boost your professional presence."
          icon={<GrBusinessService size={50} />}
        />
        <Card
          title="Marriage, Annaversary & B'day Celebrations"
          des="Get active and engaged with our sports tournaments, outdoor adventures, and recreational activities suitable for all ages."
          icon={<GiGlassCelebration size={50} />}
        />
        <Card
          title="Education & Training Sessions"
          des="From workshops to educational seminars, we offer comprehensive learning experiences tailored to your needs."
          icon={<MdCastForEducation size={50} />}
        />
        <Card
          title="Entertainment & Culture Shows"
          des="Experience vibrant cultural performances, concerts, and entertainment spectacles that leave a lasting impression."
          icon={<MdTempleBuddhist size={50} />}
        />
        <Card
          title="Health & Wellness Programs"
          des="Promote well-being with our wellness retreats, fitness events, and health-focused workshops designed to rejuvenate mind and body."
          icon={<MdHealthAndSafety size={50} />}
        />
        <Card
          title="Social & Community Gatherings"
          des="Build meaningful connections through our community events, social gatherings, and networking opportunities."
          icon={<TbSocial size={50} />}
        />
        <Card
          title="Sports & Recreation Activities"
          des="Get active and engaged with our sports tournaments, outdoor adventures, and recreational activities suitable for all ages."
          icon={<FcSportsMode size={50} />}
        />
      </div>
    </section>
  );
}

export default Features;
