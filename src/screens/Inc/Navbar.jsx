import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// import ScrollMenu from "../ScrollMenu";
// import login from "../../assets/images/login.svg";
// import cart from "../../assets/images/cart.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile-menu state

  return (
    <>
      <div className="xl:w-11/12 lg:w-11/12 m-auto px-2 pt-4">
        {/* ── top bar (logo + nav) ─────────────────────────────────────── */}
        <nav className="grid lg:grid-cols-2 items-center relative max-sm:flex">
          {/* Logo */}
          <div>
          <p className="text-[32px] font-semibold uppercase">TrendLoom</p>
          </div>

          {/* Hamburger toggle (hidden ≥ lg) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-auto p-2 focus:outline-none"
          >
            <Icon
              icon={open ? "mdi:close" : "mdi:menu"}
              className="w-7 h-7"
            />
          </button>

          {/* Links */}
          <ul
            className={`
              lg:flex lg:items-center lg:space-x-3 lg:justify-end
              ${open ? "block" : "hidden"}
              lg:static absolute right-0 top-full
              bg-white lg:bg-transparent shadow lg:shadow-none
              w-full lg:w-auto p-4 lg:p-0
              rounded-lg lg:rounded-none z-40
            `}
          >
            {/* Nav items */}
            <li>
              <Link
                to="/"
                className="block hover:text-[#343434] duration-300 px-5 py-1 rounded-full"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block hover:text-[#343434] duration-300 px-5 py-1 rounded-full"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block hover:text-[#343434] duration-300 px-5 py-1 rounded-full"
              >
                Products
              </Link>
            </li>

            {/* Icons */}
            <li className="flex gap-3 mt-3 lg:mt-0">
              {/* <img
                src={login}
                alt="login"
                className="w-8 bg-white rounded-full border border-[#fff] hover:border-[#000] duration-300"
              />
              <img
                src={cart}
                alt="cart"
                className="w-8 bg-white rounded-full border border-[#fff] hover:border-[#000] duration-300"
              /> */}
            </li>
          </ul>
        </nav>

        {/* ── search bar + scroll menu ────────────────────────────────── */}
        <div className="nav-2 mt-3">
          <div className="grid lg:grid-cols-2 items-center gap-5">
            {/* Search & category select */}
            <div className="flex gap-3">
              <div className="flex items-center w-full bg-white rounded-full px-4 py-1 border-2">
                <input
                  type="text"
                  placeholder="Search Cloth"
                  className="w-full bg-transparent focus:outline-none text-sm"
                />
                <Icon
                  icon="mdi:magnify"
                  className="text-gray-600"
                  width="20"
                  height="20"
                />
              </div>

              <div className="relative w-full">
                <select
                  className="appearance-none w-full bg-white text-black text-sm py-2 pl-4 pr-10 rounded-full focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Clothing
                  </option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon
                    icon="mdi:chevron-down"
                    className="text-black"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal scroll menu (unchanged) */}
            {/* <ScrollMenu /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
