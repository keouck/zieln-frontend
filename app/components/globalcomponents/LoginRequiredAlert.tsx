import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

type LoginRequiredAlertProps = {
  action: () => void;
  buttonContent: React.ReactNode;
};

const LoginRequiredAlert: React.FC<LoginRequiredAlertProps> = ({
  action,
  buttonContent,
}) => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (isSignedIn) {
      action(); // Execute the action if user is signed in
    } else {
      router.push("/sign-in"); // Redirect to login page if user is not signed in
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {buttonContent}
    </div>
  );
};

export default LoginRequiredAlert;
