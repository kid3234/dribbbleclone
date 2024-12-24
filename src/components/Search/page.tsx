"use client";
import React from "react";
import { Icon } from "@iconify/react";
interface searchComponentProps {
  show: boolean;
  toggleShow: () => void;
}

const searchComponent: React.FC<searchComponentProps> = ({
  show,
  toggleShow,
}) => {
  return (
    <div className="relative w-full  hover:bg-white bg-gray-100 rounded-full flex items-center">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="focus:outline-none focus:border-[#ec5fa1] focus:bg-white px-8 py-4 rounded-full focus:ring-0 bg-inherit  w-full border"
      />
      <div className="absolute top-2 right-4  flex gap-4 items-center cursor-pointer">
        <div onClick={toggleShow} className="flex items-center gap-1">
          Shots{""}
          {show ? (
            <Icon icon="lsicon:up-outline" width="20" height="20" />
          ) : (
            <Icon icon="lsicon:down-outline" width="20" height="20" />
          )}
        </div>
        <div className="flex items-center justify-center bg-[#ec5fa1] p-2  rounded-full text-white">
          <Icon icon="mingcute:search-line" width="20" height="20" />
        </div>
      </div>

      {show ? (
        // <div className="">
        <div>
          <div
            onClick={toggleShow}
            className="w-full h-screen fixed inset-0 z-20  bg-opacity-30 pt-4"
          ></div>

          <div className="absolute top-12 right-0 z-50 bg-white flex flex-col gap-2 w-40 px-4 py-4 rounded-lg shadow-md ">
            <p className="text-sm font-semibold hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
              Shots
            </p>
            <p className="text-sm hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
              Designers
            </p>
          </div>
        </div>
      ) : (
        // </div>

        ""
      )}
    </div>
  );
};

export default searchComponent;
