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
  const [clerkUser, setClerkUser] = useState<any>(null);
  const [clerkProfile, setClerkProfile] = useState<any>(null);
  const [profile, setProfile] = useState<User | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (username) {
      if (user) {
        if (user?.username !== username) {
          fetchOtherUser(username);
        } else {
          setClerkUser(user);
        }
      }

      setLoading(false); // Set loading to false once data is fetched
    }
  }, [username, user, profile]);

  const fetchOtherUser = async (id: string | string[]) => {
    try {
      const res = await fetch(`/api/user/${id}`, {
        method: "PUT",
      });
      const user = await res.json();

      if (user) {
        console.log(user);
        setClerkProfile(user.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  if (!user) {
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

  const fullName = (clerkProfile: any) => {
    const { firstName, lastName } = clerkProfile || {};
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    return lastName || firstName || "";
  };

  return (
    <PageLayout>
      {clerkProfile && (
        <UsersProfile
          fullName={fullName(clerkProfile)}
          profileImg={clerkProfile?.imageUrl}
          username={clerkProfile?.username as string}
          email={clerkProfile?.emailAddresses[0]?.emailAddress as string}
          // phone={"1234567890"}
          designation={"Software Engineer"}
          interests={["React", "Next.js", "Tailwind CSS"]}
          isFollowing={isFollowing}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
          isCurrentUser={isCurrentUser}
          role={clerkProfile?.unsafeMetadata?.role as string}
          curriculum={["Curriculum 1", "Curriculum 2", "Curriculum 3"]}
        />
      )}

      {user && !clerkProfile && (
        <UsersProfile
          fullName={fullName(user)}
          profileImg={user?.imageUrl}
          username={user?.username as string}
          email={user?.primaryEmailAddress?.emailAddress as string}
          // phone={"1234567890"}
          designation={"Software Engineer"}
          interests={["React", "Next.js", "Tailwind CSS"]}
          isFollowing={isFollowing}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
          isCurrentUser={isCurrentUser}
          role={user?.unsafeMetadata?.role as string}
          curriculum={["Curriculum 1", "Curriculum 2", "Curriculum 3"]}
        />
      )}
    </PageLayout>
  );
};

export default UserProfilePage;
