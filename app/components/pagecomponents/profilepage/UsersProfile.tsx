/* eslint-disable @next/next/no-img-element */
// components/profile/UsersProfile.tsx
import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileActions from "./ProfileActions";
import ProfileTabs from "./ProfileTabs";

type UsersProfileProps = {
  fullName: string;
  profileImg: string;
  username: string;
  email: string;
  phone: string;
  designation: string;
  interests?: string[];
  isFollowing: boolean;
  handleFollow: () => void;
  handleUnfollow: () => void;
  isCurrentUser: boolean;
  role: string;
  curriculum: string[];
};

const UsersProfile: React.FC<UsersProfileProps> = ({
  fullName,
  profileImg,
  email,
  phone,
  designation,
  interests,
  isFollowing,
  handleFollow,
  handleUnfollow,
  isCurrentUser,
  curriculum,
  role,
}) => {
  return (
    <section>
      <img
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cover Image"
        className="h-60 lg:h-80 w-full object-cover object-bottom"
      />
      <div className="component-px pb-8 lg:pb-16 lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
        <ProfileHeader
          profileImg={profileImg}
          fullName={fullName}
          role={role}
          email={email}
          phone={phone}
          interests={interests}
          isFollowing={isFollowing}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
          isCurrentUser={isCurrentUser}
        />
        <div className="col-span-3 py-4 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div>
              <h2 className="text-lg lg:text-2xl font-bold">{fullName}</h2>
              <p className="text-gray-500">{designation}</p>
              <p className="my-4 flex space-x-3 lg:space-x-6 text-gray-600">
                <span>56 Followers</span>
                <span>120 Following</span>
              </p>
            </div>
            <ProfileActions
              isFollowing={isFollowing}
              handleFollow={handleFollow}
              handleUnfollow={handleUnfollow}
              isCurrentUser={isCurrentUser}
            />
          </div>
          <ProfileTabs curriculum={curriculum} role={role} />
        </div>
      </div>
    </section>
  );
};

export default UsersProfile;
