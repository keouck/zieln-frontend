/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Avatar } from "antd";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Mentor {
  id: number;
  name: string;
  image: string;
  keyword: string[];
  shortDescription: string;
  socialLinks: { platform: string; url: string }[];
}

interface MentorProfileProps {
  mentor?: Mentor;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
  if (!mentor) {
    return <p className="text-center text-red-500">Mentor not found</p>;
  }

  return (
    <section>
      <img
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg"
        alt={mentor.name}
        className="h-60 lg:h-72 w-full object-cover object-bottom"
      />
      <div className="component-px pb-8 lg:pb-16 lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="-mt-16 lg:-mt-24 bg-white lg:p-4 lg:rounded-3xl lg:shadow lg:sticky lg:top-32">
            <div className="flex lg:justify-center mb-2 overflow-hidden">
              <Avatar
                src={mentor.image}
                size={96}
                className="border-2 border-gray-200"
              />
            </div>
            <h2 className="text-sm lg:text-center mb-4 lg:mb-8">{mentor.name}</h2>

            <hr />
            <div className="my-4">
              <h3 className="font-medium mb-2 text-sm lg:text-base">Skills</h3>
              <ul className="text-gray-600 flex flex-wrap gap-3">
                {mentor.keyword.map((keyword, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 border rounded-full text-xs lg:text-sm"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="my-4">
              <h3 className="font-medium mb-2 text-sm lg:text-base">
                Social Links
              </h3>
              <div className="flex  space-x-4">
                {mentor.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    {link.platform === "Facebook" && (
                      <FaFacebook size={24} className="text-blue-600" />
                    )}
                    {link.platform === "Instagram" && (
                      <FaInstagram size={24} className="text-pink-500" />
                    )}
                    {link.platform === "LinkedIn" && (
                      <FaLinkedin size={24} className="text-blue-700" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 py-4 lg:py-8">
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">{mentor.name}</h2>
            <p className="text-gray-500">{mentor.shortDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;
