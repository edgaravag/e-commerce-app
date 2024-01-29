import Image from "next/image";
import React from "react";
import BillboardImg from "../public/billboard.jpg";

const Billboard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Image
        src={BillboardImg}
        alt=""
        priority
        className="rounded-2xl"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-montserrat">
          Explore The Featured Collection!
        </h1>
      </div>
    </div>
  );
};

export default Billboard;
