"use client";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const { user } = useClerk();
  const pathName = usePathname();
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    setIsSigned(pathName === "/signin" || pathName === "/signup");
  }, [pathName]);

  // Listen to changes in the user state
  useEffect(() => {
    setIsSigned(false); // Reset isSigned state when user changes
  }, [user]);

  console.log(user  );

  return (
    !isSigned && (
      <header className="bg-black py-4 shadow-lg">
        <div className="component-px flex justify-between items-center">
          <div className="logo flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">ZIELN</h1>
          </div>

          <div className="buttons flex space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => router.push("/signin")}
                  className="bg-primary text-black px-4 py-2 rounded-full shadow-md hover:bg-black hover:text-primary border-2 border-primary transition duration-300"
                >
                  Login
                </button>
                <button className="bg-black text-primary border-2 border-primary px-4 py-2 rounded-full shadow-md hover:bg-primary hover:text-black transition duration-300">
                  Register
                </button>
              </>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
