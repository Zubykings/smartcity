import React from "react";
import phone from "../../assets/images/phone2.png";

const Navbar = () => {
  return (
    <>
      <header className=" fixed right-0 left-0 top-0 bg-[#1C2432] z-50">
        <div className=" container mx-auto flex h-20 max-w-screen-xl items-center gap-10 sm:px-6 lg:pt-5 lg:px-20">
          <a className="block text-gray-100 Home-Icon font-bold text-2xl" href="/">
            <span className="sr-only">Home</span>
            smart city.
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center te gap-6 text-base font-medium ">
                <li>
                  <a
                    className=" transition tracking-wide text-gray-100 hover:border-b-2 hover:border-white py-3"
                    href="/"
                  >
                    Latest Apartment Listings
                  </a>
                </li>

                <li>
                  <a
                    className=" transition tracking-wide text-gray-100 hover:border-b-2 hover:border-white py-3"
                    href="/"
                  >
                    Our Process
                  </a>
                </li>

                <button
                  type="button"
                  class=" tracking-wide focus:outline-none text-gray-100 font-medium text-sm py-2 text-center inline-flex items-center "
                >
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  class="text-black font-bold bg-white transition duration-500 ease-in-out  hover:bg-[#00AB8E] focus:outline-none  rounded text-sm px-6 py-2 text-center inline-flex items-center dark:bg-white dark:hover:bg-[#00AB8E]"
                >
                  Houston
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                // className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                // href="/"
                >
                  <img src={phone} className="w-8 h-8 text-white" alt="" />
                </a>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
