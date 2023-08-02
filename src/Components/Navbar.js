import React, { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
        <h1>LOGO</h1>
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              Home
            </li>
            <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
              <a>Our Cause</a>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              Blogs
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              Gallery 
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                About Us              
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span
              onClick={handleToggle}
              class="navicon bg-white-darkest flex items-center relative"
            >
              <svg
                style={{color:"white"}}
                height="32px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
}
