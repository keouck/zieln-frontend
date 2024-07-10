/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGlobe, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

type ProfileHeaderProps = {
  profileImg: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  interests?: string[];
  isFollowing: boolean;
  handleFollow: () => void;
  handleUnfollow: () => void;
  isCurrentUser: boolean;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImg,
  fullName,
  role,
  email,
  phone,
  interests,
}) => {
  // Determine if the role is an organization
  const isOrganization = role.toLowerCase() === "organization";

  return (
    <div className="lg:col-span-1">
      <div className="-mt-16 lg:-mt-24 bg-white p-4 rounded-3xl shadow sticky top-32">
        <div className="flex justify-center mb-2 overflow-hidden">
          <img
            src={profileImg}
            alt=""
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        <h2 className="text-sm text-center mb-4 lg:mb-8">{fullName}</h2>
        <small className="text-center">{role}</small>
        <div className="my-4">
          <p className="flex justify-between">
            <span className="font-medium">Profile views</span>
            <span>489</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Events Organized</span>
            <span>6</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">
              {isOrganization ? "Events Attendees" : "Events Attended"}
            </span>
            <span>50</span>
          </p>
        </div>
        <hr />
        <div className="my-4">
          <h3 className="font-medium mb-2 text-sm lg:text-base">Interest</h3>
          <ul className="text-gray-600 flex flex-wrap gap-3">
            {interests?.map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 border rounded-full text-xs lg:text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="my-4">
          <h3 className="font-medium mb-2 text-sm lg:text-base">
            Contact Information
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <FaGlobe className="mr-2" />
            <span>www.binitashrestha.com</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaEnvelope className="mr-2" />
            <span>{email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaPhoneAlt className="mr-2" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
