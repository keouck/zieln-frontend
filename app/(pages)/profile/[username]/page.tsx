/* eslint-disable react/no-unescaped-entities */
"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import UsersProfile from "@/app/components/pagecomponents/profilepage/UsersProfile";
import { usersData } from "@/app/data/usersData";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  interests: string[];
  curriculum: string[];
  unsafeMetadata: {
    role: string;
  };
}

const UserProfilePage = () => {
  const { username } = useParams();
  const { user } = useUser();
  const [profile, setProfile] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (username) {
      const userProfile = usersData.find((user) => user.username === username);
      setProfile(userProfile || null);

      if (userProfile && user) {
        const isUserFollowing = userProfile?.followers.some(
          (follower) => follower.id === user.id
        );
        setIsFollowing(isUserFollowing);
      }

      setLoading(false); // Set loading to false once data is fetched
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

  if (loading) {
    return (
      <PageLayout>
        <Loader />
      </PageLayout>
    );
  }

  if (!profile) {
    return (
      <PageLayout>
        <div className="min-h-[85vh] border-t flex justify-center items-center h-full">
          <h2 className="text-xl font-semibold">
            The profile was not found or doesn't exist.
          </h2>
        </div>
      </PageLayout>
    );
  }

  const isCurrentUser = user?.username === username;

  return (
    <PageLayout>
      <UsersProfile
        fullName={profile?.fullName}
        profileImg={profile?.profilePicture}
        username={profile?.username}
        email={profile?.email}
        phone={profile?.phone}
        designation={profile?.designation}
        interests={profile?.interests}
        isFollowing={isFollowing}
        handleFollow={handleFollow}
        handleUnfollow={handleUnfollow}
        isCurrentUser={isCurrentUser}
        role={profile?.unsafeMetadata?.role}
        curriculum={profile?.curriculum}
      />
    </PageLayout>
  );
};

export default UserProfilePage;
