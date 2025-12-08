import React from "react";
import Title from "../Title/Title";
import { theme } from "../../Constants/theme";

function About() {
  return (
    <section
      id="aboutus"
      className={`${theme.colors.primaryBg} my-1 p-5 min-h-screen h-full rounded-lg`}
    >
      <div className="flex flex-col justify-center">
        <Title min="Story of our beginning..." max="About us" />

        <div className="flex flex-col items-center justify-center gap-2 px-6">
          <h1
            className={` text-2xl ${theme.colors.accentGold} font-bold mb-6 text-center`}
          >
            Welcome to Rutba PR & Events
          </h1>

          <p className="text-sm text-gray-300 text-justify max-w-5xl leading-relaxed">
            Where quality meets innovation. As a premier PR and event management
            company, we specialize in curating unforgettable experiences.
          </p>
          <p className="text-sm text-gray-300 text-justify max-w-5xl leading-relaxed">
          From high-profile corporate gatherings to exclusive brand promotions, we
          ensure seamless execution and impactful engagement.
          </p>

          <p className="mt-4 text-sm text-gray-300 text-justify max-w-5xl leading-relaxed">
            Our team of experts blends strategic planning with creative
            excellence to deliver results that elevate your brand and leave a
            lasting impression.
          </p>

          {/* Services Section */}
          <div className="mt-6 max-w-3xl">
            <h2
              className={`text-xl ${theme.colors.accentGold} font-semibold mb-4`}
            >
              Our Services: Events & PR
            </h2>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>
                <strong className="text-amber-400">Corporate Events:</strong>{" "}
                Product launches, award ceremonies, conferences, and seminars.
              </li>
              <li>
                <strong className="text-amber-400">
                  Weddings & Social Events:
                </strong>{" "}
                Celebrity appearances, private parties, and opulent weddings.
              </li>
              <li>
                <strong className="text-amber-400">Brand Promotions:</strong>{" "}
                Influencer partnerships, digital marketing, and media outreach.
              </li>
              <li>
                <strong className="text-amber-400">
                  Entertainment Events:
                </strong>{" "}
                Fashion shows, music performances, and cultural festivals.
              </li>
              <li>
                <strong className="text-amber-400">
                  Trade Shows & Exhibitions:
                </strong>{" "}
                Networking events and business expos.
              </li>
            </ul>
          </div>

          {/* Offers & Facilities Section */}
          <div className="mt-6 max-w-3xl text-sm">
            <h2
              className={`text-xl ${theme.colors.accentGold} font-semibold mb-4`}
            >
              Offers & Facilities
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <strong className="text-amber-400">
                  End-to-End Event Management:
                </strong>{" "}
                Planning, execution, and cleanup services.
              </li>
              <li>
                <strong className="text-amber-400">
                  Venue Selection & Decoration:
                </strong>{" "}
                Stage design, floral arrangements, and themed settings.
              </li>
              <li>
                <strong className="text-amber-400">PR & Media Coverage:</strong>{" "}
                Press releases, media relations, and brand storytelling.
              </li>
              <li>
                <strong className="text-amber-400">
                  Hospitality & Catering:
                </strong>{" "}
                Luxury dining experiences and guest management.
              </li>
              <li>
                <strong className="text-amber-400">
                  Influencer & Celebrity Partnerships:
                </strong>{" "}
                Exclusive bookings for brand endorsements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
