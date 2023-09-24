import React from "react";

const Footer = () => {
  return (
    <div className="pt-10">
      <footer class="bg-black h-[90vh]">
        <div class="mx-auto bg-[#1C2432] px-4 h-[58vh] py-12 sm:px-6 lg:px-8">
          <div class="lg:flex lg:items-start lg:gap-8">
            <div class="flex pb-16 w-full justify-around lg:mt-0 ">
              <div class="flex flex-col w-1/6 ">
                <h1 class="font-bold text-xl uppercase text-white">
                  Contact Us
                </h1>
                <p className="mt-6 space-y-4 leading-8 text-base text-gray-500 font-bold">
                  2519 Fairway Park Dr. Suite 310 Houston, TX 77092
                  houston@smartcitylocating.com (713) 482-1323
                </p>
              </div>

              <div class="">
                <p class="text-xl text-white font-bold uppercase">
                  get started
                </p>

                <ul class="mt-6 space-y-2 text-gray-500 text-base font-bold">
                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Latest Apartment Listing
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Our Process
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Neighborhood
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div class="">
                <p class="text-xl text-white font-bold uppercase">Learn More</p>

                <ul class="mt-6 space-y-2 text-gray-500 text-base font-bold">
                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Get Utilities
                    </a>
                  </li>

                  <li>
                    <a href="#" class=" transition hover:opacity-75">
                      Rewards
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-[28%] ">
                <div className="flex flex-col item-center ps-10">
                  <p class="font-bold text-xl text-white uppercase">Social</p>
                  <ul className="mt-6 gap-5 text-base font-semibold flex items-center">
                    <li className="rounded-full flex h-14 w-14 bg-[#FFAB91] ">
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-black m-auto transition hover:opacity-75"
                      >
                        <span class="sr-only">Instagram</span>

                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li className="rounded-full flex h-14 w-14 bg-[#FFAB91]  ">
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-black m-auto transition hover:opacity-75"
                      >
                        <span class="sr-only">Facebook</span>

                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="rounded-full flex h-14 w-14 bg-[#FFAB91] ">
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-black m-auto transition hover:opacity-75"
                      >
                        <span class="sr-only">Twitter</span>

                        <svg
                          class="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" bg-[#171D29] h-[32vh]">
          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-8">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-28">
              <a
                className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
                href="#MainContent"
              >
                <span className="sr-only">Back to top</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="lg:flex lg:items-end lg:justify-between">
              <div className="flex flex-col items-start text-teal-600 lg:justify-start">
                <div className="flex flex-col items-start justify-center text-teal-600 lg:justify-start">
                  <ul className="mt-12 flex flex-wrap font-bold justify-center lg:mt-0 lg:justify-end">
                    <li>
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Legal
                      </a>
                    </li>

                    <li className="border-s-2 border-gray-600">
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Website Assessibility Statement
                      </a>
                    </li>

                    <li className="border-s-2 border-gray-600">
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Careers
                      </a>
                    </li>

                    <li className="border-s-2 border-gray-600">
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Newsroom
                      </a>
                    </li>
                  </ul>
                  <ul className="mt-12  font-bold justify-center lg:mt-0 lg:justify-start">
                  <li>
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Texas Real Estate Commission Information About Brokerage Services
                      </a>
                    </li>

                    <li className="">
                      <a
                        className="text-gray-500 px-2 transition hover:text-teal-700"
                        href="/"
                      >
                        Texas Real Estate Commission Consumer Protection Notice
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="mt-12 text-center text-sm text-gray-500 font-bold">
                    Copyright &copy; 2023. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
