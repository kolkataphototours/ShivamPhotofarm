import React from "react";
import Carousel from "@/components/Home/Carousel";
import {Home} from "@/components/Home/data"

const HomePage = () => {
  return (
    <>
      <Carousel data={Home.carousel} heading={Home.heading} />
    </>
  );
};

export default HomePage;
