/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../globalcomponents/Buttons";
import { GoKebabHorizontal } from "react-icons/go";
import { eventsData } from "@/app/data/eventsData";
import EventCard from "../eventspage/EventCard";

export default function UsersProfile({
  fullName,
  profileImg,
  username,
  email,
  phone,
  designation,
  skills,
  isFollowing,
  handleFollow,
  handleUnfollow,
  isCurrentUser,
}: any) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <section className="">
      <img
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className=" h-60 lg:h-80 w-full object-cover object-bottom"
      />
      <div className="component-px pb-8 lg:pb-16 lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
        <div className=" lg:col-span-1 ">
          <div className="-mt-16 lg:-mt-24 bg-white p-4 rounded-3xl shadow sticky top-32">
            <div className="flex justify-center mb-2 overflow-hidden ">
              <img
                src={profileImg}
                alt=""
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            <h2 className="text-sm text-center mb-4 lg:mb-8">{username}</h2>
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
                <span className="font-medium">Events attended</span>
                <span>50</span>
              </p>
              <p></p>
              <p></p>
            </div>
            <hr />
            <div className="my-4">
              <h3 className="font-medium mb-2 text-sm lg:text-base">Skills</h3>
              <ul className="text-gray-600 flex flex-wrap gap-3">
                {skills.map((skill: string, index: number) => (
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
                <span> {phone}</span>
              </div>
            </div>
            <div>
              <hr />
              <div className="my-4">
                <div className="flex justify-center space-x-4">
                  <Link href="https://www.facebook.com" passHref>
                    <FaFacebook size={24} className="text-blue-600" />
                  </Link>
                  <Link href="https://www.instagram.com" passHref>
                    <FaInstagram size={24} className="text-pink-500" />
                  </Link>
                  <Link href="https://www.linkedin.com" passHref>
                    <FaLinkedin size={24} className="text-blue-700" />
                  </Link>
                  <Link href="https://www.youtube.com" passHref>
                    <FaYoutube size={24} className="text-red-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 py-4">
          {/* Other details like Name, designations, Follow button, edit profile option in three dots menu, followers and following information */}
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div>
              <h2 className="text-lg lg:text-2xl font-bold">{fullName}</h2>
              <p className="text-gray-500">{designation}</p>
              <p className="my-4 flex space-x-3 lg:space-x-6 text-gray-600">
                <span>56 Followers</span>
                <span>120 Following</span>
              </p>
            </div>
            <div className="flex  space-x-4">
              {isCurrentUser ? (
                <PrimaryButton buttonName="Edit Profile" />
              ) : (
                <>
                  <PrimaryOutlineButton
                    buttonName={isFollowing ? "Unfollow" : "+ Follow"}
                    onClick={isFollowing ? handleUnfollow : handleFollow}
                  />
                  <PrimaryButton buttonName="Message" />
                </>
              )}
              {/* <div className="h-10 flex items-center">
                <button>
                  <GoKebabHorizontal />
                </button>
              </div> */}
            </div>
          </div>
          <div>
            {/* Three tabs: About, Events, and Others */}
            <div className="border-b mb-4">
              <nav className="flex space-x-4 lg:space-x-8">
                <button
                  onClick={() => setActiveTab("About")}
                  className={`pb-2 border-b-2 ${
                    activeTab === "About"
                      ? "border-gray-900 text-black font-medium"
                      : "border-transparent text-gray-700"
                  } hover:border-gray-900`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("Events")}
                  className={`pb-2 border-b-2 ${
                    activeTab === "Events"
                      ? "border-gray-900 text-black font-medium"
                      : "border-transparent text-gray-700"
                  } hover:border-gray-900`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab("Others")}
                  className={`pb-2 border-b-2 ${
                    activeTab === "Others"
                      ? "border-gray-900 text-black font-medium"
                      : "border-transparent text-gray-700"
                  } hover:border-gray-900`}
                >
                  Others
                </button>
              </nav>
            </div>
            <div>
              {/* Tab content */}
              {activeTab === "About" && (
                <div className="mb-4 space-y-4">
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque necessitatibus blanditiis dolorem voluptas recusandae
                    dolores vitae sed pariatur quos consectetur maiores iure
                    saepe amet voluptatem eius expedita ad, ex eos similique
                    tempore. Ducimus nihil eaque distinctio necessitatibus, rem
                    laudantium molestiae. Quasi obcaecati quos debitis fuga
                    optio quam in soluta! Ipsum.
                  </p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque necessitatibus blanditiis dolorem voluptas recusandae
                    dolores vitae sed pariatur quos consectetur maiores iure
                    saepe amet voluptatem eius expedita ad, ex eos similique
                    tempore. Ducimus nihil eaque distinctio necessitatibus, rem
                    laudantium molestiae. Quasi obcaecati quos debitis fuga
                    optio quam in soluta! Ipsum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ea maiores nemo, quos fugiat
                    veritatis voluptates. Placeat eius nostrum ullam autem!
                  </p>
                </div>
              )}
              {activeTab === "Events" && (
                <div className="mb-4">
                  <div className="col-span-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {eventsData.slice(0, 5).map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Others" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Others</h3>
                  <p className="text-gray-600">
                    This is the others section where you can add additional
                    information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
