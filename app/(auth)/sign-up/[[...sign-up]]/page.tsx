"use client";
import { SecondaryOutlineButton } from "@/app/components/globalcomponents/Buttons";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import SignupForm from "@/app/components/pagecomponents/auths/SignUpForm";
import VerifyForm from "@/app/components/pagecomponents/auths/VerifyForm";
import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signUpWithEmail = async ({
    emailAddress,
    password,
    firstName,
    lastName,
    username,
  }: {
    emailAddress: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
  }) => {
    if (!isLoaded) {
      return <Loader />;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
        username,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerifying(true);
    } catch (err: any) {
      setClerkError(err.errors[0].message);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      console.log("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <PageLayout>
      <section className="relative min-h-[85vh] component-px component-py w-full flex items-center justify-center border-t">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://www.veeforu.com/wp-content/uploads/2022/10/paper-texture-background-scaled.jpg')",
            zIndex: -1,
          }}
        ></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 w-full rounded-2xl border overflow-hidden min-h-96 shadow-xl">
          {!verifying ? (
            <SignupForm
              signUpWithEmail={signUpWithEmail}
              clerkError={clerkError}
            />
          ) : (
            <VerifyForm
              handleVerify={handleVerify}
              code={code}
              setCode={setCode}
            />
          )}
          <div className="bg-primary lg:flex items-center justify-center hidden">
            <div className="text-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-white">
                Welcome Back!
              </h1>
              <p className="mt-4 lg:mt-8 flex justify-center">
                <Link
                  href="/sign-in"
                  className="border px-6 py-2 text-white rounded-full hover:bg-white hover:text-black active:scale-95 transition-all duration-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Signup;
