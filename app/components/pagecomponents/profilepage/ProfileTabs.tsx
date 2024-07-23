import React, { useState } from "react";
import EventCard from "../eventspage/EventCard";
import { eventsData } from "@/app/data/eventsData";

type ProfileTabsProps = {
  curriculum: string[]; // Assuming this is passed as a prop
  role: string;
};

const ProfileTabs: React.FC<ProfileTabsProps> = ({ curriculum, role }) => {
  const [activeTab, setActiveTab] = useState("About");

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return <p>About Content</p>;
      case "Saved Events":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsData.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        );
      case "Interested Events":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsData.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        );
      case "Curriculum/Board":
        return curriculum.length > 0 ? <p>Curriculum/Board Content</p> : null;
      default:
        return null;
    }
  };

  return (
    <div>
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
            onClick={() => setActiveTab("Saved Events")}
            className={`pb-2 border-b-2 ${
              activeTab === "Saved Events"
                ? "border-gray-900 text-black font-medium"
                : "border-transparent text-gray-700"
            } hover:border-gray-900`}
          >
            Saved Events
          </button>
          <button
            onClick={() => setActiveTab("Interested Events")}
            className={`pb-2 border-b-2 ${
              activeTab === "Interested Events"
                ? "border-gray-900 text-black font-medium"
                : "border-transparent text-gray-700"
            } hover:border-gray-900`}
          >
            Interested Events
          </button>
          {curriculum?.length > 0 && (
            <button
              onClick={() => setActiveTab("Curriculum/Board")}
              className={`pb-2 border-b-2 ${
                activeTab === "Curriculum/Board"
                  ? "border-gray-900 text-black font-medium"
                  : "border-transparent text-gray-700"
              } hover:border-gray-900`}
            >
              Curriculum/Board
            </button>
          )}
        </nav>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default ProfileTabs;
