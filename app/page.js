import React from "react";
import Carousel from "@/components/Home/Carousel";
import Gallery from "@/components/Home/Gallery";
import { Home } from "@/components/Home/data"

const HomePage = () => {
  return (
    <>
      <Carousel data={Home.carousel} heading={Home.heading} />
      <Gallery data={Home.gallery} />
    </>
  );
};

export default HomePage;
