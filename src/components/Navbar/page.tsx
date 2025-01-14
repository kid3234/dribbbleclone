"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Search from "@/components/Search/page";

interface myprops {
  isAtMiddle: boolean;
}

const Navbar: React.FC<myprops> = ({ isAtMiddle }) => {
  const [showExplore, setShowExplore] = useState(false);
  const [showHiredesiner, setShowHiredesiner] = useState(false);

  const [showExplorelarge, setShowExplorelarge] = useState(false);
  const [showHiredesinerlarge, setShowHiredesinerlarge] = useState(false);
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 1000px)");

      const handleResize = () => {
        setShowmenu(false);
        setIsLargeScreen(mediaQuery.matches);
      };

      // Add listener
      mediaQuery.addEventListener("change", handleResize);

      // Cleanup listener on unmount
      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  const openShowmenu = () => {
    setShowmenu(true); // Toggle state
    setShowSearch(false);
  };

  const closeShowmenu = () => {
    setShowmenu(false); // Toggle state
  };

  const openShowExplore = () => {
    console.log("hi");

    setShowExplorelarge(true);
    setShowHiredesinerlarge(false);
  };

  const toggleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleShowExplore = () => {
    setShowExplore((prev) => !prev);
  };

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const toggleShowHiredesiner = () => {
    setShowHiredesiner((prev) => !prev);
  };
  const closeShowExplore = () => {
    setShowExplorelarge(false); // Toggle state
  };

  const openShowHiredesiner = () => {
    // Toggle state
    setShowHiredesinerlarge(true);
  };

  const closeShowHiredesiner = () => {
    setShowHiredesinerlarge(false); // Toggle state
  };

  return (
    <div className="relative min-w-screen text-black overflow-y-auto">
      {/* menue component */}
      {showmenu ? (
        <div>
          <div className="w-full h-screen fixed inset-0 z-10 bg-black bg-opacity-30 pt-4"></div>
          <div className="fixed top-16 text-lg border-t border-gray  py-6 flex gap-6  font-bold flex-col  min-w-full bg-white z-50 shadow px-6 ">
            <div
              className="flex gap-2 items-center hover:text-gray-500 cursor-pointer"
              onClick={toggleShowExplore}
            >
              Explore{" "}
              {showExplore ? (
                <Icon icon="lsicon:up-outline" width="20" height="20" />
              ) : (
                <Icon icon="lsicon:down-outline" width="20" height="20" />
              )}{" "}
            </div>
            {showExplore ? (
              <div className=" flex flex-col gap-8  pb-2  overflow-y-auto">
                <div className="border-b-2 border-b-gray pb-8 flex flex-col gap-6 ">
                  <p className="flex gap-2 font-semibold items-center hover:text-gray-500 cursor-pointer">
                    <Icon
                      icon="material-symbols:trending-up"
                      width="20"
                      height="20"
                    />{" "}
                    Popular
                  </p>
                  <p className="flex gap-2  font-semibold items-center hover:text-gray-500 cursor-pointer">
                    <Icon
                      icon="heroicons-outline:sparkles"
                      width="20"
                      height="20"
                    />{" "}
                    New and Noteworthy
                  </p>
                </div>

                <div className="font-normal flex flex-col gap-6 text-sm">
                  <p className="hover:text-gray-500 cursor-pointer">
                    Product Design
                  </p>
                  <p className="hover:text-gray-500 cursor-pointer">
                    Web Design
                  </p>
                  <p className="hover:text-gray-500 cursor-pointer">
                    Animation
                  </p>
                  <p className="hover:text-gray-500 cursor-pointer">Branding</p>
                  <p className="hover:text-gray-500 cursor-pointer">
                    Illustration
                  </p>
                  <p className="hover:text-gray-500 cursor-pointer">Mobile</p>
                  <p className="hover:text-gray-500 cursor-pointer">
                    Typography
                  </p>
                  <p className="hover:text-gray-500 cursor-pointer">Print</p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              onClick={toggleShowHiredesiner}
              className="flex gap-2 items-center hover:text-gray-500 cursor-pointer"
            >
              Hire a Designer{" "}
              {showHiredesiner ? (
                <Icon icon="lsicon:up-outline" width="20" height="20" />
              ) : (
                <Icon icon="lsicon:down-outline" width="20" height="20" />
              )}{" "}
            </div>
            {showHiredesiner ? (
              <div className="flex flex-col gap-4 bg-white rounded-lg  py-2  overflow-y-auto">
                <div className="font-semibold flex flex-col gap-6 py-2  ">
                  <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                    <Icon icon="prime:search" width="20" height="20" /> Browse
                    Designer
                  </p>
                  <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                    <Icon icon="lucide:edit" width="20" height="20" /> Submit a
                    Project Brief
                  </p>
                  <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                    <Icon icon="akar-icons:file" width="20" height="20" /> Post
                    a Job
                  </p>
                  <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                    <Icon
                      icon="mdi:information-outline"
                      width="20"
                      height="20"
                    />{" "}
                    Hiring on Dribbble
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="hover:text-gray-500 cursor-pointer">Find Jobs</div>
            <div className="hover:text-gray-500 cursor-pointer">Blog</div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* the true nav */}

      <div
        className={`w-full bg-white  flex flex-col gap-2 items-center justify-between px-4  py-1   z-50  text-black   font-[family-name:var(--font-geist-sans)] ${
          !isAtMiddle ? "relative " : "fixed top-0"
        } ${showmenu ? "border border-b-gray-600" : ""} `}
      >
        <div className="flex w-full bg-white ">
          <div className="w-full flex  items-center gap-10">
            <div
              className={`flex    items-center gap-4 justify-start cursor-pointer ${
                isAtMiddle ? "w-full" : ""
              }`}
            >
              {!isLargeScreen && !showmenu ? (
                <div onClick={openShowmenu}>
                  <Icon
                    icon="heroicons-solid:menu-alt-2"
                    width="35"
                    height="35"
                  />
                </div>
              ) : (
                ""
              )}

              {!isLargeScreen && showmenu ? (
                <div onClick={closeShowmenu}>
                  <Icon icon="material-symbols:close" width="35" height="35" />
                </div>
              ) : (
                ""
              )}
              <img
                className="w-24 "
                src="/dribbblelogo-removebg-preview.png"
                alt="dribble-logo"
              />
              {isAtMiddle && isLargeScreen ? (
                <Search show={show} toggleShow={toggleShow} />
              ) : (
                ""
              )}
            </div>
            {isLargeScreen ? (
              <div className="w-3/4 flex items-center gap-8 ">
                <div
                  onMouseEnter={openShowExplore}
                  onMouseLeave={closeShowExplore}
                  className="relative font-semibold  text-sm "
                >
                  <div className="flex items-center gap-2 cursor-pointer  hover:text-gray-600">
                    <p className="">Explore</p>
                    <Icon icon="lsicon:down-outline" width="20" height="20" />
                  </div>
                  {showExplorelarge ? (
                    <div>
                      {/* <div
                        onMouseOver={closeShowExplore}
                        className="w-full h-screen fixed inset-0 z-20 bg-opacity-50 pt-4"
                      ></div> */}
                      <div className=" absolute top-6 left-0 w-52 flex flex-col gap-4 shadow-lg z-50 bg-white rounded-lg px-4 py-2">
                        <div className="border-b-2 border-b-black py-2 flex flex-col gap-4 ">
                          <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                            <Icon
                              icon="material-symbols:trending-up"
                              width="20"
                              height="20"
                            />{" "}
                            Popular
                          </p>
                          <p className="flex gap-2 items-center hover:text-gray-500 cursor-pointer">
                            <Icon
                              icon="heroicons-outline:sparkles"
                              width="20"
                              height="20"
                            />{" "}
                            New and Noteworthy
                          </p>
                        </div>

                        <div className="font-normal flex flex-col gap-4">
                          <p className="hover:text-gray-500 cursor-pointer">
                            Product Design
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Web Design
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Animation
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Branding
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Illustration
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Mobile
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Typography
                          </p>
                          <p className="hover:text-gray-500 cursor-pointer">
                            Print
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onMouseEnter={openShowHiredesiner}
                  onMouseLeave={closeShowHiredesiner}
                  className="relative font-semibold  text-sm "
                >
                  <div className="flex items-center gap-2 cursor-pointer  hover:text-gray-600">
                    <p>Hire a Designer</p>
                    <Icon icon="lsicon:down-outline" width="20" height="20" />
                  </div>

                  {showHiredesinerlarge ? (
                    <div>
                      {/* <div className="w-52 h-screen fixed inset-0 z-10 bg-opacity-50 pt-4"></div> */}
                      <div className=" absolute top-6 left-0 w-52 flex flex-col gap-4 shadow-lg z-50 bg-white rounded-lg px-4 py-2">
                        <div className="font-normal flex flex-col gap-4 py-2  ">
                          <p className="flex gap-2 items-center cursor-pointer">
                            <Icon icon="prime:search" width="20" height="20" />{" "}
                            Browse Designer
                          </p>
                          <p className="flex gap-2 items-center cursor-pointer">
                            <Icon icon="lucide:edit" width="20" height="20" />{" "}
                            Submit a Project Brief
                          </p>
                          <p className="flex gap-2 items-center cursor-pointer">
                            <Icon
                              icon="akar-icons:file"
                              width="20"
                              height="20"
                            />{" "}
                            Post a Job
                          </p>
                          <p className="flex gap-2 items-center cursor-pointer">
                            <Icon
                              icon="mdi:information-outline"
                              width="20"
                              height="20"
                            />{" "}
                            Hiring on Dribbble
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <p className="font-semibold text-sm hover:text-gray-600 cursor-pointer">
                  Find Jobs
                </p>
                <p className="font-semibold text-sm hover:text-gray-600 cursor-pointer">
                  Blog
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-end items-center gap-4 w-1/2 ">
            {!isLargeScreen ? (
              <>
                {isAtMiddle ? (
                  <div
                    onClick={toggleShowSearch}
                    className="cursor-pointer hover:text-gray-600"
                  >
                    <Icon icon="mingcute:search-line" width="26" height="26" />
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              <button className="font-semibold text-sm hover:text-gray-500">
                Sign up
              </button>
            )}

            <button className="font-semibold text-sm text-white bg-black hover:bg-[#3e3e3e] hover:text-gray-300 rounded-full px-4 py-2">
              Log in
            </button>
          </div>
        </div>

        {showSearch && isAtMiddle ? (
          <Search show={show} toggleShow={toggleShow} />
        ) : (
          // <div className="relative w-full  hover:bg-white bg-gray-100  rounded-full flex items-center">
          //   <input
          //     type="text"
          //     placeholder="What are you looking for?"
          //     className="focus:outline-none focus:border-[#ec5fa1] border focus:bg-white px-8 py-3 rounded-full focus:ring-0 bg-inherit  w-full"
          //   />
          //   <div className="absolute top-2 right-4 flex gap-4 items-center">
          //     <div onClick={toggleShow} className="flex items-center gap-1">
          //       Shots{""}
          //       {show ? (
          //         <Icon icon="lsicon:up-outline" width="20" height="20" />
          //       ) : (
          //         <Icon icon="lsicon:down-outline" width="20" height="20" />
          //       )}
          //     </div>
          //     <div className="flex items-center justify-center bg-[#ec5fa1] p-2  rounded-full text-white">
          //       <Icon icon="mingcute:search-line" width="20" height="20" />
          //     </div>
          //     {show ? (
          //       <div>
          //         <div
          //           onClick={toggleShow}
          //           className="w-full h-screen fixed inset-0 z-10  bg-opacity-30 pt-4"
          //         ></div>

          //         <div className="absolute top-10 right-0 z-50 bg-white flex flex-col gap-2 w-40 px-4 py-4 rounded-lg shadow-md ">
          //           <p className="text-sm font-semibold hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
          //             Shots
          //           </p>
          //           <p className="text-sm hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
          //             Designers
          //           </p>
          //         </div>
          //       </div>
          //     ) : (

          //       ""
          //     )}
          //   </div>
          // </div>
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
