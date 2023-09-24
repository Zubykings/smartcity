import React, { useState } from "react";
import CalendarInput from "./CalendarInput";

const Hero = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="pt-20 w-full ">
      <div className="container flex h-[85vh] w-full mx-auto pt-12">
        <div className=" w-[45%] container">
          <div className="w-3/4 mx-auto space-y-10">
            <h1 className="text-[40px] tracking-wide leading-tight font-semibold text-black">
              When are you looking to move in Houston?
            </h1>
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className="block"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-black border-transparent border border-gray-300 rounded-md  bg-gray-100 hover:bg-gray-100 "
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded={isAccordionOpen}
                  aria-controls="accordion-collapse-body-1"
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <span>Find out the 'Why'?</span>
                  <div
                    className={`border border-black h-8 w-8 flex rounded-full text-center ${
                      isAccordionOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 shrink-0 m-auto "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={isAccordionOpen ? "M1 1l4 4 4-4" : "M9 5 5 1 1 5"}
                      />
                    </svg>
                  </div>
                </button>
              </h2>

              <div
                id="accordion-collapse-body-1"
                className="p-5  border-gray-200 dark:border-gray-700 bg-gray-100"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Providing this information ensures more accurate pricing and
                  availability that works for your time frame. Not exactly sure
                  when you're moving? Select a range, instead of one fixed date,
                  to give us a general idea.Flowbite is an open-source library
                  of interactive components built on top of Tailwind CSS
                  including buttons, dropdowns, modals, navbars, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#00AB8E] rounded-md w-1/2">
          <div className="container ">
            <div className="mt-16 mx-auto w-4/5 space-y-6">
              <h1 className="font-bold text-white">Ideal Move-in-date</h1>
              <CalendarInput />
              <button
                type="button"
                class="text-white w-full bg-[#1C2432] transition duration-500 ease-in-out focus:outline-none font-semibold rounded text-lg px-6 py-4 text-center justify-center inline-flex items-center dark:bg-[#1C2432]"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
