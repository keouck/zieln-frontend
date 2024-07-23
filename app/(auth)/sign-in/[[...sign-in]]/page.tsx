"use client";
import Loader from "@/app/components/globalcomponents/Loader";
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import SignInForm from "@/app/components/pagecomponents/auths/SignInForm";
import { useSignIn } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return <Loader />;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      setClerkError(err.errors[0].message);
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
          <div className="bg-primary hidden  lg:flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-white">
                Hello, Friend!
              </h1>
              <p className="mt-4 lg:mt-8 flex justify-center">
                <Link
                  href="/sign-up"
                  className="border px-6 py-2 text-white rounded-full hover:bg-white hover:text-black active:scale-95 transition-all duration-300"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <SignInForm
            signInWithEmail={signInWithEmail}
            clerkError={clerkError}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Signin;
