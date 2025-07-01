"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Themetoggle } from "./theme-toggle.js";

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 w-full z-50 bg-white dark:bg-black ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:justify-center  items-center h-16">
          {/* Hamburger Icon */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menu Items (desktop) */}
          <ul className="hidden lg:flex space-x-4  items-center">
            {["Home", "Certificates", "Projects", "Education", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <a href="/">{item}</a>
                </li>
              )
            )}
          </ul>
          <div className="mx-4">
            <Themetoggle />
          </div>
        </div>

        {/* Menu Items (mobile dropdown) */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col space-y-2 mt-4 pb-4">
            {["Home", "Certificates", "Projects", "Education", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900 text-center"
                >
                  <a href="/">{item}</a>
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}
