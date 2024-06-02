"use client";
import { UserButton, useClerk } from "@clerk/nextjs";
import { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AntdDropdown from "./AntdDropdown";
import PrelineDropDown from "./ResourcesDropdown";
import Link from "next/link";
import ResourcesDropDown from "./ResourcesDropdown";

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

  console.log(user);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    !isSigned && (
      <header className={`py-2 w-full transition-all ease-in-out sticky top-0 bg-white z-50 ${!top && `shadow`}`}>
        <div className="component-px flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">ZIELN</h1>
          </Link>

          <div className="flex space-x-4">
            <a
              className="font-medium text-grayy-700 hover:text-primary py-3 md:px-3 md:py-6 "
              href="#"
              aria-current="page"
            >
              About
            </a>

            <a
              className="font-medium text-grayy-700 hover:text-primary py-3 md:px-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-500"
              href="#"
            >
              Events For you
            </a>

            <AntdDropdown
              items={items}
              buttonLabel="Event Categories"
              placement="bottom"
            />

            <ResourcesDropDown />

            <a
              className="font-medium text-grayy-700 hover:text-primary py-3 md:px-3 md:py-6 dark:text-neutral-200 dark:hover:text-neutral-500"
              href="#"
            >
              Blogs
            </a>
          </div>

          <div className="buttons flex space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => router.push("/signin")}
                  className="bg-primary text-white px-4 py-2 rounded-full shadow-md  hover:text-primary hover:bg-white border-2 border-primary transition duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className=" text-primary border-2 border-primary px-4 py-2 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300">
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
