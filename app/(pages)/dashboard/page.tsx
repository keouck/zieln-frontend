"use client";
import React, { useState } from "react";
import PageLayout from "../../components/globalcomponents/PageLayout";
import { useUser } from "@clerk/nextjs";
import { Button, Select } from "antd";

type TRole = "STUDENT" | "ORGANIZATION";

const Home: React.FC = () => {
  const [role, setRole] = useState<TRole>("STUDENT");
  const { user } = useUser();

  const updateUser = async () => {
    user?.update({
      unsafeMetadata: {
        role,
      },
    });
  };

  return (
    <PageLayout>
      <section className="flex flex-col items-center justify-center min-h-screen p-10 text-center ">
        <h1 className="text-6xl font-bold mb-8">Welcome to ZEILN DASHBOARD</h1>

        {!user?.unsafeMetadata.role && (
          <div className="flex flex-col gap-y-7">
            <label htmlFor="role" className="text-xl font-medium">
              Select Role
            </label>
            <Select
              style={{ width: 200 }}
              id="role"
              value={role}
              onChange={(e) => setRole(e as TRole)}
            >
              <Select.Option value="STUDENT">Student</Select.Option>
              <Select.Option value="ORGANIZATION">Organization</Select.Option>
            </Select>
            <Button onClick={updateUser}>Continue</Button>
          </div>
        )}
      </section>
    </PageLayout>
  );
};

export default Home;
