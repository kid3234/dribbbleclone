"use client";
import Navbar from "@/components/Navbar/page";
import Search from "@/components/Search/page";
import Card from "@/components/Card/page";
import CircularCarousel from "@/components/CircularCarousel/page";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isAtMiddle, setIsAtMiddle] = useState(false);
  const [show, setShow] = useState(false);
  const scrollContainer = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const cardData = [
    { content: "Card 1" },
    { content: "Card 2" },
    { content: "Card 3" },
    { content: "Card 4" },
  ];
  const data = [
    {
      image: "/image/image.png",
      project: "Project name",
      profile: "",
      like: 471,
      seen: 7.5,
    },
    {
      image: "/image/image1.png",
      project: "Project name",
      profile: "",
      like: 70,
      seen: 11.7,
    },
    {
      image: "/image/image2.png",
      project: "Project name",
      profile: "",
      like: 119,
      seen: 15.8,
    },
    {
      image: "/image/image3.png",
      project: "Project name",
      profile: "",
      like: 66,
      seen: 9.6,
    },
    {
      image: "/image/image4.png",
      project: "Project name",
      profile: "",
      like: 193,
      seen: 10.1,
    },
    {
      image: "/image/image5.png",
      project: "Project name",
      profile: "",
      like: 92,
      seen: 4.5,
    },
    {
      image: "/image/image6.png",
      project: "Project name",
      profile: "",
      like: 105,
      seen: 3.5,
    },
    {
      image: "/image/image7.png",
      project: "Project name",
      profile: "",
      like: 35,
      seen: 4.7,
    },
    {
      image: "/image/image8.png",
      project: "Project name",
      profile: "",
      like: 73,
      seen: 7.5,
    },
    {
      image: "/image/image9.png",
      project: "Project name",
      profile: "",
      like: 58,
      seen: 5.2,
    },
    {
      image: "/image/image10.png",
      project: "Project name",
      profile: "",
      like: 96,
      seen: 1.3,
    },
    {
      image: "/image/image11.png",
      project: "Project name",
      profile: "",
      like: 619,
      seen: 4.8,
    },
    {
      image: "/image/image12.png",
      project: "Project name",
      profile: "",
      like: 667,
      seen: 4.6,
    },
    {
      image: "/image/image13.png",
      project: "Project name",
      profile: "",
      like: 155,
      seen: 9.1,
    },
    {
      image: "/image/image14.png",
      project: "Project name",
      profile: "",
      like: 952,
      seen: 6.5,
    },
    {
      image: "/image/image15.png",
      project: "Project name",
      profile: "",
      like: 305,
      seen: 9.5,
    },
    {
      image: "/image/image16.png",
      project: "Project name",
      profile: "",
      like: 355,
      seen: 8.7,
    },
    {
      image: "/image/image17.png",
      project: "Project name",
      profile: "",
      like: 743,
      seen: 10.5,
    },
    {
      image: "/image/image18.png",
      project: "Project name",
      profile: "",
      like: 568,
      seen: 4.2,
    },
  ];

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction: any) => {
    const scrollAmount = 100; // Adjust scroll amount as needed

    scrollContainer.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkArrows, 300); // Check arrows after scrolling
  };

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
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              landing page
            </p>
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              e-commerce
            </p>
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              mobile app
            </p>
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              logo design
            </p>
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              dashboard
            </p>
            <p className="text-sm bg-gray-100 px-3 py-1 rounded-full">icons</p>
          </div>
        </div>
      </main>
      <main className="flex flex-col gap-8 items-center justify-center px-10 sm:items-start text-black">
        <div className="w-full flex flex-col justify-center gap-4">
          <div className="w-full flex items-center justify-between">
            <p className="flex gap-2 items-center px-4 py-2 rounded border">
              Popular <Icon icon="lsicon:down-outline" width="20" height="20" />
            </p>
            <p className="flex gap-2 items-center px-4 py-2 rounded-full border">
              <Icon icon="proicons:filter" width="20" height="20" /> Filter
            </p>
          </div>
          <hr />
          <div className="relative justify-center flex items-center">
            {showLeftArrow && (
              <div
                className="absolute left-0 z-10 h-full px-2 bg-white"
                onClick={() => scroll("left")}
              >
                <Icon icon="lsicon:left-filled" width="20" height="20" />
              </div>
            )}
            <div
              ref={scrollContainer}
              className="flex font-semibold py-2 gap-10 overflow-x-auto no-scrollbar whitespace-nowrap"
              onScroll={checkArrows}
            >
              <p className="hover:text-gray-400 cursor-pointer">Discover</p>
              <p className="hover:text-gray-400 cursor-pointer">Animation</p>
              <p className="hover:text-gray-400 cursor-pointer">Branding</p>

              <p className="hover:text-gray-400 cursor-pointer">Mobile</p>
              <p className="hover:text-gray-400 cursor-pointer">Print</p>
              <p className="hover:text-gray-400 cursor-pointer">
                Product Design
              </p>
              <p className="hover:text-gray-400 cursor-pointer">Typography</p>
              <p className="hover:text-gray-400 cursor-pointer">Web Design</p>
            </div>
            {showRightArrow && (
              <div
                className="absolute right-0 z-10 h-full px-2 bg-white"
                onClick={() => scroll("right")}
              >
                <Icon icon="lsicon:right-filled" width="20" height="20" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full m-auto gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item: any) => (
            <Card data={item} key={item?.image} />
          ))}
        </div>
        <div className="py-2 px-4 text-sm rounded-full bg-black text-white font-semibold self-center">
          {" "}
          Sign up to continue
        </div>
      </main>
      <main className="py-12">
        <div className="w-full   flex  justify-center items-center  ">
          <CircularCarousel cards={cardData} />
        </div>
      </main>
      <main className="flex justify-center sm:flex-col gap-8  bg-white py-8">
        <div className="flex  flex-col lg:flex-row self-center items-center lg:w-3/4  justify-center gap-4 lg:gap-10 ">
          <img
            className="w-24 "
            src="/dribbblelogo-removebg-preview.png"
            alt="dribble-logo"
          />
          <div className="flex   justify-center gap-4 lg:gap-12  text-black flex-wrap text-sm ">
            <p>For designers</p>
            <p>Hire talent</p>
            <p>Inspiration</p>
            <p>Advertising</p>
            <p>Blog</p>
            <p>About</p>
            <p>Careers</p>
            <p>Support</p>
          </div>

          <div className="flex items-center gap-3 ">
            <Icon
              icon="ant-design:facebook-filled"
              width="25"
              height="25"
              color="black"
            />
            <Icon
              icon="flowbite:instagram-solid"
              width="25"
              height="25"
              color="black"
            />
            <Icon icon="uil:twitter" width="25" height="25" color="black" />
            <Icon icon="prime:pinterest" width="25" height="25" color="black" />
          </div>
        </div>
      </main>

      <footer className="w-3/4 m-auto mb-16  flex flex-col lg:flex-row  justify-between">
        <div className="flex  gap-8 items-center text-sm text-gray-400">
          <p> 2025 Dribbble</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className="flex  gap-8 items-center text-sm text-gray-400">
          <p>Jobs</p>
          <p>Designers</p>
          <p>Freelancers</p>
          <p>Tags</p>
          <p>Places</p>
          <p>Resources</p>
        </div>
      </footer>
    </div>
  );
}
