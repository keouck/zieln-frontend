// app/components/pagecomponents/auths/SignInForm.tsx
import Link from "next/link";

interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SignInForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8 text-center uppercase">
        Sign In
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          const email = target.email.value;
          const password = target.password.value;
          signInWithEmail({ emailAddress: email, password: password });
        }}
      >
        <div className="space-y-8">
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
        <h2 className="text-red-700 text-sm my-4">
          {clerkError && <p>{clerkError}</p>}
        </h2>
        <div className="mt-8">
          <button
            className="w-full h-12 mb-6 text-sm font-light bg-primary text-white rounded-md"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="text-sm font-light text-center text-black">
        Don&apos;t have an acccount?
        <Link className="ml-2 text-black hover:underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
