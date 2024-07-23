// components/profile/ProfileActions.tsx
import React from "react";
import {
  PrimaryButton,
  PrimaryOutlineButton,
  SecondaryButton,
} from "../../globalcomponents/Buttons";
import LoginRequiredAlert from "../../globalcomponents/LoginRequiredAlert";

type ProfileActionsProps = {
  isFollowing: boolean;
  handleFollow: () => void;
  handleUnfollow: () => void;
  isCurrentUser: boolean;
};

const ProfileActions: React.FC<ProfileActionsProps> = ({
  isFollowing,
  handleFollow,
  handleUnfollow,
  isCurrentUser,
}) => {
  return (
    <div className="flex space-x-4">
      {isCurrentUser ? (
        <>
          <SecondaryButton link="/my-events" buttonName="Manage Events" />
          <PrimaryButton buttonName="Edit Profile" />
        </>
      ) : (
        <>
          <LoginRequiredAlert
            action={isFollowing ? handleUnfollow : handleFollow}
            buttonContent={
              <PrimaryOutlineButton
                buttonName={isFollowing ? "Unfollow" : "+ Follow"}
              />
            }
          />
          <LoginRequiredAlert
            action={() => console.log("message")}
            buttonContent={<PrimaryButton buttonName="Message" />}
          />
        </>
      )}
    </div>
  );
};

export default ProfileActions;
