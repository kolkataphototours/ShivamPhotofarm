import React from "react";
import Carousel from "@/components/Home/Carousel";
import Gallery from "@/components/Home/Gallery";
import { Home } from "@/components/Home/data"
import Us from "@/components/Home/Us";
import Videos from "@/components/Home/Videos";

const HomePage = () => {
  return (
    <>
      <Carousel data={Home.carousel} heading={Home.heading} />
      <Us/>
      <Videos/>
      <Gallery data={Home.gallery} />
    </>
  );
};

export default HomePage;
