import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

interface SignUpFormProps {
  signUpWithEmail: ({
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
  }) => void;
  clerkError: string;
}

const SignupForm = ({ signUpWithEmail, clerkError }: SignUpFormProps) => {
  return (
    <div className="w-full">
      {/* <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8 text-center uppercase">
        Sign Up
      </h1>
      <form
        onSubmit={(e) => {
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
          const username = target.username.value;
          const email = target.email.value;
          const password = target.password.value;
          signUpWithEmail({
            emailAddress: email,
            password,
            firstName,
            lastName,
            username,
          });
        }}
      >
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <input
              name="firstName"
              className="block w-full pb-2 pl-4 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-slate-600 text-black caret-slate-700 focus:border-primary outline-none"
              placeholder="First Name"
              type="text"
              required
            />
            <input
              name="lastName"
              className="block w-full pb-2 pl-4 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-slate-600 text-black caret-slate-700 focus:border-primary outline-none"
              placeholder="Last Name"
              type="text"
              required
            />
          </div>
          <input
            name="username"
            className="block w-full pb-2 pl-4 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-slate-600 text-black caret-slate-700 focus:border-primary outline-none"
            placeholder="Username"
            type="text"
            required
          />
          <input
            name="email"
            className="block w-full pb-2 pl-4 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-slate-600 text-black caret-slate-700 focus:border-primary outline-none"
            placeholder="Email address"
            type="email"
            required
          />
          <input
            name="password"
            className="block w-full pb-2 pl-4 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-slate-600 text-black caret-slate-700 focus:border-primary outline-none"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <h2 className="text-slate-700 my-4">
          {clerkError && <p>{clerkError}</p>}
        </h2>
        <div className="mt-8">
          <button
            className="w-full h-12 mb-6 text-sm font-light bg-primary text-white rounded-md"
            type="submit"
          >
            Create an account
          </button>
        </div>
      </form>
      <p className="text-sm font-light text-center text-black">
        Already have an account?
        <Link className="ml-2 text-black hover:underline" href="/sign-in">
          Sign in
        </Link>
      </p> */}
      <SignUp />
    </div>
  );
};

export default SignupForm;
