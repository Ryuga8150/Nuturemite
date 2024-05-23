import React from "react";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";
import BannerSlider from "../components/BannerSlider";
import Newsletter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeatureSection />
      <ProductSection />
      <Newsletter />
    </div>
  );
};

export default Home;
