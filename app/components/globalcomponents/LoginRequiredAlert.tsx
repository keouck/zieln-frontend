import { useUser } from "@clerk/nextjs";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    if (isSignedIn) {
      action(); // Execute the action if user is signed in
    } else {
      setIsModalVisible(true); // Show modal if user is not signed in
    }
  };

  const handleOk = () => {
    router.push("/sign-in"); // Redirect to login page
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {buttonContent}
      </div>
      <Modal
        title="Login Required"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Login"
        cancelText="Cancel"
      >
        <p>You need to be logged in to perform this action.</p>
      </Modal>
    </>
  );
};

export default LoginRequiredAlert;
