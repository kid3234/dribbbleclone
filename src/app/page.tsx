"use client";
import Navbar from "@/components/Navbar/page";
import Search from "@/components/Search/page";
import { useState, useEffect } from "react";

export default function Home() {
  const [isAtMiddle, setIsAtMiddle] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 300 && !isAtMiddle) {
          setIsAtMiddle(true);
        } else if (scrollPosition < 300 && isAtMiddle) {
          setIsAtMiddle(false);
        }
      };

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isAtMiddle]);

  return (
    <div className="w-full min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <Navbar isAtMiddle={isAtMiddle} />
      <main className="flex w-full px-4 lg:w-3/5 m-auto text-black flex-col justify-center gap-4 row-start-2 items-center  h-96">
        <h1 className="text-3xl lg:w-3/4 text-center lg:text-6xl  font-semibold">
          Discover the world’s top designers
        </h1>
        <p className="text-center text-sm lg:text-xl w-3/4 lg:w-3/4 ">
          Explore work from the most talented and accomplished designers ready
          to take on your next project
        </p>
        <Search show={show} toggleShow={toggleShow} />
        <div className="w-full flex flex-col gap-4 items-center">
          <p className="text-sm text-gray-400">Trending searches</p>
          <div className="flex flex-wrap gap-4 ">
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">landing page</p>
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">e-commerce</p>
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">mobile app</p>
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">logo design</p>
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">dashboard</p>
             <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">icons</p>
          </div>
        </div>
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-300 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-400 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-500 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-600 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-700 h-96"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
