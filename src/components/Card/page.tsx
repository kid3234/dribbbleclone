// "use client";
// import React from "react";
// import { Icon } from "@iconify/react";
// import { useState } from "react";

// interface cardPrps {
//   data: object;
// }

// const Card: React.FC<cardPrps> = ({ data }) => {
//   const [show, setShow] = useState(false);

//   const openShow = () => {
//     setShow(true);
//     console.log("hover",show);
//   };

//   const closeShow = () => {
//     console.log("hover",show);
    
//     setShow(false);

//     console.log("hover 3",show);
//   };

//   return (
//     <div>
//       <div
//         onMouseOver={closeShow}
//         className="w-screen cursor-pointer h-screen  fixed inset-0 z-20 bg-opacity-30 pt-4"
//       ></div>

//       <div
//         onMouseOver={openShow}
//         className="relative w-72  z-40 pb-2 flex flex-col gap-2 rounded-t-lg cursor-pointer"
//       >
//         {show ? (
//           <div>
//             <div className="absolute w-full px-4 py-4 bg-black bg-opacity-50  top-28 shadow-lg shadow-gray-900  flex items-center gap-4 text-white">
//               <p>{data?.project}</p>
//               <div className="p-2 rounded-full bg-white ">
//                 <Icon
//                   icon="stash:save-ribbon-solid"
//                   width="20"
//                   height="20"
//                   color="black"
//                 />
//               </div>
//               <div className="p-2 rounded-full bg-white ">
//                 <Icon
//                   icon="icon-park-outline:like"
//                   width="20"
//                   height="20"
//                   color="black"
//                 />
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}

//         <img src={data?.image} alt="image" className="w-full h-40 rounded-lg" />
//         <div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <img
//                 src="/image/image1.png"
//                 alt="image"
//                 className="w-6 h-6 rounded-full "
//               />
//               <p>something</p>
//               <p className="bg-gray-300 text-gray-50 ">PRO</p>
//             </div>
//             <div className="flex items-center gap-4 text-black">
//               <p className="flex gap-2 items-center ">
//                 <Icon
//                   icon="icon-park-solid:like"
//                   width="20"
//                   height="20"
//                   color="gray"
//                 />{" "}
//                 {data?.like}
//               </p>
//               <p className="flex gap-2 items-center ">
//                 <Icon
//                   icon="tabler:eye-filled"
//                   width="20"
//                   height="20"
//                   color="gray"
//                 />{" "}
//                 {data?.seen}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface CardProps {
  data: { project?: string; image?: string; like?: number; seen?: number };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [show, setShow] = useState(false);

  const openShow = () => {
    setShow(true);
  };

  const closeShow = () => {
    setShow(false);
  };

  return (
    <div
      className="relative w-72 pb-2 flex flex-col gap-2 rounded-t-lg cursor-pointer"
      onMouseEnter={openShow}
      onMouseLeave={closeShow}
    >
      {show && (
        // <div className="absolute w-full px-4 py-4 bg-black bg-opacity-50 top-28 shadow-lg shadow-gray-900 flex items-center gap-4 text-white z-40">
        //   <p>{data?.project}</p>
        //   <div className="p-2 rounded-full bg-white">
        //     <Icon
        //       icon="stash:save-ribbon-solid"
        //       width="20"
        //       height="20"
        //       color="black"
        //     />
        //   </div>
        //   <div className="p-2 rounded-full bg-white">
        //     <Icon
        //       icon="icon-park-outline:like"
        //       width="20"
        //       height="20"
        //       color="black"
        //     />
        //   </div>
        // </div>
        <div className="absolute w-full px-6 py-3 bg-gray-800 bg-opacity-40 top-24 shadow-xl rounded-lg flex items-center gap-4 text-white z-40">
  <p className="text-lg font-semibold truncate">{data?.project}</p>
  <div className="p-2 rounded-full bg-white flex items-center justify-center shadow-md">
    <Icon icon="stash:save-ribbon-solid" width="20" height="20" color="black" />
  </div>
  <div className="p-2 rounded-full bg-white flex items-center justify-center shadow-md">
    <Icon icon="icon-park-outline:like" width="20" height="20" color="black" />
  </div>
</div>

      )}

      <img src={data?.image} alt="image" className="w-full h-40 rounded-lg" />

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/image/image1.png"
              alt="profile"
              className="w-6 h-6 rounded-full"
            />
            <p>something</p>
            <p className="bg-gray-300 text-gray-50">PRO</p>
          </div>
          <div className="flex items-center gap-4 text-black">
            <p className="flex gap-2 items-center">
              <Icon icon="icon-park-solid:like" width="20" height="20" color="gray" />
              {data?.like}
            </p>
            <p className="flex gap-2 items-center">
              <Icon icon="tabler:eye-filled" width="20" height="20" color="gray" />
              {data?.seen}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

