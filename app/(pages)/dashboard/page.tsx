/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { PrimaryButton } from "@/app/components/globalcomponents/Buttons";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import PageLayout from "../../components/globalcomponents/PageLayout";
import { IoShieldCheckmark } from "react-icons/io5";
import { message, Modal } from "antd";
import { useRouter } from "next/navigation";
import withAuth from "@/app/hoc/withAuth";

type TRole = "STUDENT" | "ORGANIZATION";

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState<TRole | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user && user.unsafeMetadata.role) {
      setSelectedRole(user.unsafeMetadata.role as TRole);
    }
  }, [user]);

  const handleContinueClick = () => {
    if (selectedRole) {
      setIsModalVisible(true);
    } else {
      message.error("Please select a role before continuing.");
    }
  };

  const confirmRoleSelection = async () => {
    setIsModalVisible(false);
    try {
      await user?.update({
        unsafeMetadata: { role: selectedRole },
      });
      message.success("Role updated successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error updating user:", error);
      message.error("Failed to update role. Please try again.");
    }
  };

  return (
    <PageLayout>
      <section className="component-px bg-gray-100 flex flex-col items-center justify-center min-h-screen text-center space-y-8 lg:space-y-16">
        {!user?.unsafeMetadata.role ? (
          <>
            {/* Header  */}
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold">
                Please select your <span className="text-blue-700">Role</span>
              </h1>
              <p className="mt-4 max-w-2xl">
                Please choose your role carefully. Once selected, you won't be
                able to change it. Make sure to select the role that best
                describes you.
              </p>
            </div>
            {/* Role selection  */}
            <div className="flex flex-col items-center gap-y-7">
              <div className="grid grid-cols-2 gap-x-4 lg:gap-x-10">
                {(["STUDENT", "ORGANIZATION"] as TRole[]).map((role) => (
                  <div
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`relative cursor-pointer p-6 lg:p-12 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      selectedRole === role
                        ? "border-2 border-primary"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center">
                        <img
                          src={
                            role === "STUDENT"
                              ? "/images/student.png"
                              : "/images/organization.png"
                          }
                          alt={role}
                          className="w-16 lg:w-28 h-16 lg:h-28"
                        />
                      </div>
                      {selectedRole === role && (
                        <IoShieldCheckmark className="absolute top-2 lg:top-4 right-2 lg:right-4 text-xl lg:text-3xl text-primary" />
                      )}
                      <p className="mt-4 lg:text-xl font-medium">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Continue BUtton  */}
            <PrimaryButton
              buttonName="Continue"
              onClick={handleContinueClick}
            />
          </>
        ) : (
          <div>
            <h1 className="text-2xl lg:text-4xl font-semibold">
              You are logged in as{" "}
              <span className="text-blue-700">{selectedRole}</span>
            </h1>
          </div>
        )}

        {/* Confirmation Modal  */}
        <Modal
          title="Confirm Role Selection"
          open={isModalVisible}
          onOk={confirmRoleSelection}
          onCancel={() => setIsModalVisible(false)}
        >
          <p>Are you sure you want to choose this role: {selectedRole}?</p>
        </Modal>
      </section>
    </PageLayout>
  );
};

export default withAuth(Dashboard);
