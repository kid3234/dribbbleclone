import React, { useState } from "react";

interface Props {
  cards: Array<{ content: string }>;
}

const CircularOrbitCarousel: React.FC<Props> = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const data = [
    {
      image: "/image/image.png",
      title: "Mobile",
    },
    {
      image: "/image/image1.png",
      title: "Typography",
    },
    {
      image: "/image/image18.png",
      title: "Product Design",
    },
    {
      image: "/image/image3.png",
      title: "Print",
    },
    {
      image: "/image/image4.png",
      title: "IIlustration",
    },
    {
      image: "/image/image5.png",
      title: "Web Design",
    },
    {
      image: "/image/image6.png",
      title: "Branding",
    },
    {
      image: "/image/image7.png",
      title: "Animation",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white h-fit flex items-center">
      <div
        className={`flex animate-marquee ${isPaused ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data.concat(data).map((card, index) => (
          <div
            key={index}
            className="w-48 h-48 text-white flex flex-col justify-center items-center rounded-lg  mx-4 my-2 hover:shadow-layered  transition-all duration-300 cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm font-medium text-black">{card.title}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }

        .paused {
          animation-play-state: paused;
        }

        // .hover\:shadow-layered:hover {
        //   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2),
        //     0px 10px 20px rgba(0, 0, 0, 0.15), 0px 15px 30px rgba(0, 0, 0, 0.1);
        // }
      `}</style>
    </div>
  );
};

export default CircularOrbitCarousel;
