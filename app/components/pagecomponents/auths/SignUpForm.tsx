import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpForm = () => {
  const { signUp, isLoaded } = useSignUp();
  const [clerkError, setClerkError] = useState<string | null>(null);
  const [emailCode, setEmailCode] = useState("");
  const [step, setStep] = useState<"signUp" | "verifyEmail">("signUp");

  if (!isLoaded) return <div>Loading...</div>;

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const password = target.password.value;
    const username = target.username.value;

    try {
      await signUp.create({
        emailAddress: email,
        password,
        unsafeMetadata: {
          firstName,
          lastName,
          username,
        },
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setStep("verifyEmail");
      setClerkError(null);
    } catch (err: any) {
      const error = err.errors?.[0];
      setClerkError(error?.longMessage || "Sign-up failed. Please try again.");
    }
  };

  const handleVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp.attemptEmailAddressVerification({ code: emailCode });
      setClerkError(null);
      alert("Sign-up complete! You can now sign in.");
    } catch (err: any) {
      const error = err.errors?.[0];
      setClerkError(error?.longMessage || "Verification failed. Please try again.");
    }
  };

  return (
    <div className="p-6 md:p-8">
      {step === "signUp" && (
        <>
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8 text-center uppercase">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp}>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input
                  name="firstName"
                  className="input"
                  placeholder="First Name"
                  type="text"
                  required
                />
                <input
                  name="lastName"
                  className="input"
                  placeholder="Last Name"
                  type="text"
                  required
                />
              </div>
              <input
                name="username"
                className="input"
                placeholder="Username (optional)"
                type="text"
              />
              <input
                name="email"
                className="input"
                placeholder="Email address"
                type="email"
                required
              />
              <input
                name="password"
                className="input"
                placeholder="Password"
                type="password"
                required
              />
            </div>
            {clerkError && <p className="text-red-500 mt-4">{clerkError}</p>}
            <button className="btn-primary" type="submit">
              Create an account
            </button>
          </form>
          <p className="text-sm font-light text-center text-black">
            Already have an account?
            <Link href="/sign-in" className="ml-2 text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </>
      )}

      {step === "verifyEmail" && (
        <>
          <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8 text-center uppercase">
            Verify Email
          </h1>
          <form onSubmit={handleVerifyEmail}>
            <div className="space-y-8">
              <input
                className="input"
                placeholder="Enter the verification code"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                type="text"
                required
              />
            </div>
            {clerkError && <p className="text-red-500 mt-4">{clerkError}</p>}
            <button className="btn-primary" type="submit">
              Verify Email
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUpForm;


// To access First Name, Last Name, Username, exitCode. in the future use the following:

// import { useUser } from "@clerk/nextjs";

// const UserProfile = () => {
//   const { user } = useUser();

//   return (
//     <div>
//       <h1>Welcome, {user?.unsafeMetadata?.firstName}!</h1>
//     </div>
//   );
// };
