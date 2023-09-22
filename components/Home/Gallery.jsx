"use client";
import React from "react";

const Gallery = ({ data }) => {
  return (
    <div className="relative -z-20 my-4 w-screen flex items-center flex-col">
      <div className="w-[88%] md:w-[75%] md:h-screen">
        <img src={data[0].url} alt="img" className="h-full w-full" />
      </div>

      <div className="w-[88%] md:w-[75%] md:h-screen mt-3">
        <img src={data[1].url} alt="img" className="h-full w-full" />
      </div>

      <div className="w-[88%] h-auto md:w-[75%] mt-3 md:h-[63vh] flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-[69%] md:h-full">
          <img src={data[3].url} alt="img" className="h-full w-full" />
        </div>
        <div className="mt-3 w-full h-[60vh] md:w-[30%] md:h-full md:mt-0">
          <img src={data[4].url} alt="img" className="h-full w-full" />
        </div>
      </div>

      <div className="w-[88%] md:w-[75%] mt-3 md:h-[50vh] flex flex-col md:flex-row md:justify-between">
        <div className="w-full h-[60vh] md:w-[20%] md:h-full">
          <img src={data[5].url} alt="img" className="h-full w-full" />
        </div>
        <div className="w-full h-[60vh] mt-3 md:mt-0 md:w-[20%] md:h-full ">
          <img src={data[6].url} alt="img" className="h-full w-full" />
        </div>
        <div className="md:w-[58%] md:h-full mt-3 md:mt-0">
          <img src={data[7].url} alt="img" className="h-full w-full" />
        </div>
      </div>

      <div className="w-[88%] md:w-[75%] mt-3 md:h-[63vh] flex flex-col md:flex-row md:justify-between">
        <div className="md:w-[69%] md:h-full">
          <img src={data[8].url} alt="img" className="h-full w-full" />
        </div>
        <div className="w-full h-[60vh] md:w-[30%] md:h-full mt-3 md:mt-0">
          <img src={data[9].url} alt="img" className="h-full w-full" />
        </div>
      </div>

      <div className="w-[88%] md:w-[75%] mt-3 md:h-[50vh] flex flex-col md:flex-row md:justify-between">
        <div className="w-full h-[60vh] md:w-[20%] md:h-full">
          <img src={data[5].url} alt="img" className="h-full w-full" />
        </div>
        <div className="w-full h-[60vh] mt-3 md:mt-0 md:w-[20%] md:h-full ">
          <img src={data[6].url} alt="img" className="h-full w-full" />
        </div>
        <div className="mt-3 md:mt-0 md:w-[58%] md:h-full ">
          <img src={data[7].url} alt="img" className="h-full w-full" />
        </div>
      </div>

      <div className="w-[88%] md:w-[75%] md:h-screen mt-3">
        <img src={data[8].url} alt="img" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Gallery;
