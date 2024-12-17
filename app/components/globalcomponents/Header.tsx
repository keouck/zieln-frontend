"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { Drawer, Dropdown, Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiSearch } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { PrimaryButton, PrimaryOutlineButton } from "./Buttons";
import LoginRequiredAlert from "./LoginRequiredAlert";

interface NavItemProps {
  link: string;
  name: string;
}

const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useClerk();

  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(true);

  const showDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleCreateEvent = useCallback(() => {
    router.push("/create-event");
  }, [router]);

  const menu = useMemo(
    () => (
      <Menu>
        <Menu.Item key="0">
          <Link href={`/profile/${user?.username}`}>View Profile</Link>
        </Menu.Item>
      </Menu>
    ),
    [user?.username]
  );

  return (
    <header
      className={`py-2 w-full transition-all ease-in-out sticky top-0 bg-white z-50 ${
        !top && `shadow`
      }`}
    >
      <div className="component-px flex items-center justify-between">
        {/* Title and Search Bar */}
        <div className="flex items-center gap-x-6 w-full">
          <Link href="/" className="flex-shrink-1">
            <h1
              className="text-2xl lg:text-4xl font-bold font-lora text-primary"
              style={{ whiteSpace: "nowrap", margin:"0px" }}
            >
              Outsmash
            </h1>
          </Link>
          {/* Search Bar */}
          <div className="hidden lg:block flex-grow">
            <SearchBar />
          </div>
        </div>

        {/* Buttons and Drawer */}
        <div className="flex items-center space-x-4">
          <div className="buttons flex items-center space-x-4">
            <div className="hidden lg:flex">
              {navItems.map((item) => (
                <NavItem key={item.link} name={item.name} link={item.link} />
              ))}
            </div>
            {!user ? (
              <>
                <div className="hidden lg:block">
                  <LoginRequiredAlert
                    action={handleCreateEvent}
                    buttonContent={
                      <PrimaryOutlineButton buttonName="+ Add Opportunity" />
                    }
                  />
                </div>
                <PrimaryButton link="/sign-in" buttonName="Join" />
              </>
            ) : (
              <>
                <div className="">
                  <PrimaryOutlineButton
                    link="/create-event"
                    buttonName="+ Add Opportunity"
                  />
                </div>
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

          <button onClick={showDrawer} className="lg:hidden">
            <GrMenu size={24} />
          </button>
          <Drawer
            title={<h1 className="text-2xl lg:text-4xl font-bold font-sans text-primary">Outsmash</h1>}
            onClose={onClose}
            open={open}
            className="lg:hidden"
          >
            {navItems.map((item) => (
              <NavItem key={item.link} name={item.name} link={item.link} />
            ))}
            <div className="block mt-2">
              <LoginRequiredAlert
                action={handleCreateEvent}
                buttonContent={
                  <PrimaryOutlineButton buttonName="+ Add Opportunity" />
                }
              />
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

const navItems: NavItemProps[] = [
  { name: "Opportunities", link: "/events" },
  { name: "Resources", link: "/resources" },
  { name: "Mentorship", link: "/mentors" },
  { name: "Blogs", link: "/blogs" },
];

const NavItem: React.FC<NavItemProps> = ({ link, name }) => {
  const path = usePathname();
  const isActive = path.startsWith(link);
  return (
    <Link href={link}>
      <div
        className={`py-3 md:px-3 md:py-6 text-sm ${
          isActive
            ? "text-black font-bold"
            : "text-gray-800 font-medium hover:text-black transition duration-300"
        }`}
      >
        {name}
      </div>
    </Link>
  );
};

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/events/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white w-full max-w-lg"
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Search opportunities..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 focus:outline-none placeholder:text-sm flex-grow"
      />
      {/* Button */}
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 flex items-center justify-center"
      >
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default Header;
