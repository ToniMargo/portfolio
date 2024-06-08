"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/constants";

const LinkClassName = (path) => {
  const pathname = usePathname();
  return `my-2 md:my-0 md:mx-3 ${pathname === path ? "text-teal-500 " : "text-black"}`;
};

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Function to update isSmallScreen state based on viewport width
    const updateIsSmallScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example breakpoint: 768px
    };
    // Call the function once when component mounts
    updateIsSmallScreen();
    // Event listener to update isSmallScreen state when viewport size changes
    window.addEventListener("resize", updateIsSmallScreen);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallScreen);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isSmallScreen ? (
        <div className="block">
          <button className="w-fit m-4 mb-0 py-3 px-5 flex bg-white rounded-3xl border" onClick={toggleDropdown}>
            Menu
            <img src="chevron-down.svg" alt="down-arrow" className="ml-3 align-middle" />
          </button>
          {isOpen && (
            <div className="absolute w-full m-4 mt-0 px-5 flex flex-col bg-white">
              {NAV_LINKS.map((link, index) => (
                <Link key={index} href={link.path} className={LinkClassName(link.path)}>
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div class="flex items-center justify-center pt-3">
          <nav className="font-bold w-auto justify-center bg-white rounded-3xl shadow-md p-3">
            {NAV_LINKS.map((link, index) => (
              <Link key={index} href={link.path} className={LinkClassName(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
