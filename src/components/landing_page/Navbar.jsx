
import React, { useState } from "react";
import logo from "./../../assets/imgs/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="bg-[#049aa1] fixed w-full px-4 xl:px-28 md:py-3 py-6 z-50">
        <div className="flex justify-between items-center">
          <div className="w-1/3 md:w-auto">
            <a href="">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </a>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <ul className="flex xl:space-x-16 md:space-x-5 capitalize poppins text-lg font-normal dark:text-[#162447] text-white">
              <li>
                <a href="" className="">
                  About
                </a>
              </li>
              <li>
                <a href="" className="">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="text-white px-6 py-2 rounded-[26px] bg-[#049aa1] border-2 border-white">
                  Login
                </a>
              </li>
              <li>
                <div>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full bg-transparent text-white capitalize text-lg font-normal"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                    }}
                  >
                    <option className="text-black">United States</option>
                    <option className="text-black">Canada</option>
                    <option className="text-black">Mexico</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <button
              id="menu-button"
              aria-label="Open Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-3" id="mobile-menu">
            <ul className="space-y-4 capitalize poppins text-lg font-normal dark:text-[#162447] text-white text-center">
              <li>
                <a href="" className="">
                  About
                </a>
              </li>
              <li>
                <a href="" className="">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="text-white px-6 py-2 rounded-[26px] bg-[#049aa1] border-2 border-white">
                  Login
                </a>
              </li>
              <li>
              
               <div className="flex justify-center pt-4">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-[30%] bg-transparent text-white capitalize text-lg font-normal"
                    >
                      <option className="text-black">United States</option>
                      <option className="text-black">Canada</option>
                      <option className="text-black">Mexico</option>
                    </select>
                    </div>
                
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export default Navbar;
