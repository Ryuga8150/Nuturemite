import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import SwiperCore, { Thumbs } from "swiper";

// SwiperCore.use([Thumbs]);
const images = [
  "https://nuturemite.info/wp-content/uploads/2022/11/1074342-3.jpg",
  "https://nuturemite.info/wp-content/uploads/2022/11/1074342-1-scaled.jpg",
  "https://nuturemite.info/wp-content/uploads/2022/11/1074342-2-scaled.jpg",
  "https://nuturemite.info/wp-content/uploads/2022/11/1074342-4.jpg",
];

ProductImageSlider.propTypes = {
  images: PropTypes.array,
};

function ProductImageSlider({ images }) {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperParams = {
    modules: [Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 1000 },
  };
  return (
    <div className=" max-w-xl  bg-white rounded-xl shadow-md space-y-4">
      <Swiper
        // thumbs={{ swiper: thumbsSwiper }}
        // className="main-slider"
        {...swiperParams}
        className="w-2/3"
      >
        {images.map((url, ind) => (
          <SwiperSlide key={ind}>
            <img src={url} alt={`Product ${url}`} />
          </SwiperSlide>
        ))}

        <FaChevronRight className="swiper-button-next bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 right-2  shadow-md" />
        <FaChevronLeft className="swiper-button-prev bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 left-2 shadow-md" />
      </Swiper>
    </div>
  );
}

export default ProductImageSlider;
