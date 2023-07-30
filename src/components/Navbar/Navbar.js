import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <nav
        x-data="{ isOpen: false }"
        class="relative bg-white shadow dark:bg-white"
      >
        <div class="container px-6 py-3 mx-auto">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <a href="#">
                  <img
                    class="w-auto h-6 sm:h-12"
                    src="/Fashioninza-removebg-preview.png"
                    alt=""
                  />
                </a>

                <div class="hidden mx-10 md:block">
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        class="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>

                    <input
                      type="text"
                      class="w-full py-2 pl-12 pr-80 text-gray-700 bg-white border rounded-md dark:bg-white dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search Your Products"
                    />
                  </div>
                </div>
              </div>

              <div class="flex lg:hidden">
                <button
                  type="button"
                  class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div class="flex flex-col md:flex-row md:mx-1">
                <Link
                  class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:t-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                  to="/"
                >
                  Home
                </Link>
                <a
                  class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:t-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                  href="#"
                >
                  Shop
                </a>
                <Link
                  class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:t-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  class="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:t-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                  to="/cart"
                >
                  Cart
                </Link>
              </div>

              <div class="my-4 md:hidden">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Men
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Women
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              kids
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Infant
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Western
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Casual
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Summer
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Winter
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Floral
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Today's deals
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Festive
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Offers
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Formals
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Couple's Section
            </a>
            <a
              class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-black hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
              href="#"
            >
              Prime members
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
