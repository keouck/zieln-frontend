"use client";
import { usersData } from "@/app/data/usersData";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import UsersProfile from "@/app/components/pagecomponents/profilepage/UsersProfile";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import Loader from "@/app/components/globalcomponents/Loader";

interface User {
  id: string;
  username: string;
  bio: string;
  profilePicture: string;
  followers: { id: string; username: string }[];
  following: { id: string; username: string }[];
  fullName: string;
  email: string;
  phone: string;
  designation: string;
  skills: string[];
}

const UserProfilePage = () => {
  const { username } = useParams();
  const { user } = useUser();
  const [profile, setProfile] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (username) {
      const userProfile = usersData.find((user) => user.username === username);
      setProfile(userProfile || null);

      if (userProfile && user) {
        const isUserFollowing = userProfile.followers.some(
          (follower) => follower.id === user.id
        );
        setIsFollowing(isUserFollowing);
      }
    }
  }, [username, user]);

  const handleFollow = () => {
    if (profile && user) {
      setIsFollowing(true);
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              followers: [
                ...prev.followers,
                { id: user.id, username: user.username || "" },
              ],
            }
          : prev
      );
    }
  };

  const handleUnfollow = () => {
    if (profile && user) {
      setIsFollowing(false);
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              followers: prev.followers.filter(
                (follower) => follower.id !== user.id
              ),
            }
          : prev
      );
    }
  };

  if (!profile)
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );

  const isCurrentUser = user?.username === username;

  return (
    <PageLayout>
      <UsersProfile
        fullName={profile.fullName}
        profileImg={profile.profilePicture}
        username={profile.username}
        email={profile.email}
        phone={profile.phone}
        designation={profile.designation}
        skills={profile.skills}
        isFollowing={isFollowing}
        handleFollow={handleFollow}
        handleUnfollow={handleUnfollow}
        isCurrentUser={isCurrentUser}
      />
    </PageLayout>
  );
};

export default UserProfilePage;
