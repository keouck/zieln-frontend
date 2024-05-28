"use client";
// Import useState hook from React
import { useEffect, useState } from "react";
// Import icons
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
// Import Image component from Next.js
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if the user is already logged in (by checking session storage)
    const isSigned = sessionStorage.getItem("isSigned");
    if (isSigned === "true") {
      // Redirect to dashboard if already logged in
      router.push("/dashboard");
    }
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Form validation logic here
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Hardcoded email and password
    const hardcodedEmail = "test@gmail.com";
    const hardcodedPassword = "test";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      console.log("Login successful!");
      sessionStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard"); // You can replace this with actual login logic
    } else {
      setErrorMessage("Incorrect email or password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="component-px component-py grid lg:grid-cols-2">
      {/* Image */}
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src="/images/login.png"
          alt="Login Image"
          className="max-h-full max-w-full"
          width={500}
          height={500}
        />
      </div>

      {/* LoginForm  */}
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6 lg:mb-12 text-center">
            Sign In
          </h2>

          <div className="mb-4 lg:mb-6 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <HiOutlineMail className="h-5 w-5 text-gray-500" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#EBE9E9] pl-10 shadow appearance-none border rounded-lg w-full py-2 lg:py-4 px-3 text-gray-700 placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CgLock className="h-5 w-5 text-gray-500" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="bg-[#EBE9E9] pl-10 shadow appearance-none border rounded-lg w-full py-2 lg:py-4 px-3 text-gray-700 placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Show Password
            </label>
          </div>
          {/* Error message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <div className="w-full mb-6">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-yellow-500 text-black font-bold py-2 lg:py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700">
              Don&apos;t have an account?{" "}
              <a
                href="/create-account"
                className="text-blue-500 hover:text-blue-800"
              >
                Create an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
