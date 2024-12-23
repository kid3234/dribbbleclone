"use client";
import Navbar from "@/components/Navbar/page";
import { useState,useEffect} from "react";

export default function Home() {
  const [isAtMiddle, setIsAtMiddle] = useState(false);

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
      <Navbar isAtMiddle={isAtMiddle}/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-200 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-300 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-400 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-500 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-600 h-96"></main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-700 h-96"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
