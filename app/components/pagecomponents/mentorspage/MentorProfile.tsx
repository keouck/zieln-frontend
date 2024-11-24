// MentorProfile.tsx
import React from 'react';

interface Mentor {
  id: number;
  profileImage: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  location: string;
  linkedin: string;
  CV: string;
  email: string;
}

const MentorProfile: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
      {/* Larger Profile Picture */}
      <img
        src={mentor.profileImage}
        alt={`${mentor.name}'s profile`}
        className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-300"
      />

      {/* Name and Title */}
      <h2 className="text-xl font-semibold text-gray-800">{mentor.name}</h2>
      <p className="text-gray-500 text-sm">{mentor.title}</p>

      {/* Bio / Description */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {mentor.bio}
      </p>

      {/* Skills / Specializations */}
      <div className="mt-4">
        <h3 className="text-gray-700 font-medium">Specializations:</h3>
        <ul className="mt-2 space-y-1">
          {mentor.skills.map((skill, index) => (
            <li key={index} className="text-gray-600 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Location */}
      <p className="mt-4 text-gray-500 text-sm">{mentor.location}</p>

      {/* Contact Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
          LinkedIn
        </a>
        <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
          CV
        </a>
        <a href={`mailto:${mentor.email}`} className="text-blue-600 hover:text-blue-400">
          Email
        </a>
      </div>
    </div>
  );
};

export default MentorProfile;
