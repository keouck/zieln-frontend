"use client";
import { UserButton, useClerk } from "@clerk/nextjs";
import { Drawer, Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { PrimaryButton, PrimaryOutlineButton } from "./Buttons";
import ResourcesDropDown from "./ResourcesDropdown";

const Header = () => {
  const { user } = useClerk();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    // Check the screen size initially
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href={`/profile/${user?.username}`}>View Profile</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`py-2 w-full transition-all ease-in-out sticky top-0 bg-white z-50 ${
        !top && `shadow`
      }`}
    >
      <div className="component-px flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Zieln Logo"
            width={100}
            height={100}
            className="w-16 lg:w-20"
          />
        </Link>

        <div className="hidden lg:flex space-x-4">
          <NavItem name="About" link="/about" />
          <NavItem name="Events" link="/events" />
          <NavItem name="Mentorship" link="/mentors" />
          <ResourcesDropDown />
          <NavItem name="Blogs" link="/blogs" />
          <NavItem name="Contact us" link="/contact" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="buttons flex items-center space-x-4">
            {!user ? (
              <>
                <PrimaryOutlineButton
                  link="/create-event"
                  buttonName="+ Create Event"
                />
                <PrimaryButton link="/sign-in" buttonName="Log in" />
              </>
            ) : (
              <>
                <PrimaryOutlineButton
                  link="/create-event"
                  buttonName="+ Create Event"
                />
                <UserButton />
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  className="hidden lg:block"
                >
                  <FiMenu size={24} className="cursor-pointer" />
                </Dropdown>
              </>
            )}
          </div>

          {/* For small screen */}
          <button onClick={showDrawer} className="lg:hidden">
            <GrMenu size={24} />
          </button>
          <Drawer
            title={<h1 className="text-xl font-bold">Zieln</h1>}
            onClose={onClose}
            open={open}
            className="lg:hidden"
          >
            <NavItem name="About" link="/about" />
            <NavItem name="Events" link="/events" />
            <NavItem name="Mentorship" link="/mentors" />
            <ResourcesDropDown />
            <NavItem name="Blogs" link="/blogs" />
            <NavItem name="Contact us" link="/contact" />
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;

const NavItem = ({ link, name }: { link: string; name: string }) => {
  const path = usePathname();
  const isActive = path.startsWith(link);
  return (
    <Link href={link}>
      <div
        className={`py-3 md:px-3 md:py-6 ${
          isActive
            ? "text-black font-bold"
            : "text-gray-800 font-medium hover:text-black  transition duration-300"
        }`}
      >
        {name}
      </div>
    </Link>
  );
};
