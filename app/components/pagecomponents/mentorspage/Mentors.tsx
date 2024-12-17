// Mentors.tsx
import React from 'react';
import MentorProfile from './MentorProfile';
import { mentorsData } from '../../../data/mentorsData';

const Mentors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {mentorsData.map((mentor) => (
        <MentorProfile key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default Mentors;
