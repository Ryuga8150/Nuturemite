import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaPrescriptionBottleAlt,
  FaCapsules,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Banner = ({ title, description, Icon, bgColor }) => (
  <div
    className={`flex items-center justify-between py-16 px-12 rounded-lg ${bgColor} w-full`}
  >
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
    <Icon className="w-16 h-16 text-white" />
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  bgColor: PropTypes.string.isRequired,
};

function BannerSlider() {
  const swiperParams = {
    modules: [Navigation, Autoplay, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 3000 },
    pagination: { clickable: true },
  };

  return (
    <Swiper {...swiperParams} className="w-full">
      <SwiperSlide>
        <Banner
          title="Prescription Medicine"
          description="Effective solutions for your health needs"
          Icon={FaPrescriptionBottleAlt}
          bgColor="bg-blue-600"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          title="Health Supplements"
          description="Boost your wellness with our range of supplements"
          Icon={FaCapsules}
          bgColor="bg-green-600"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          title="Heart Care"
          description="Protect your heart with our trusted products"
          Icon={FaHeartbeat}
          bgColor="bg-red-600"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          title="Heart Care"
          description="Protect your heart with our trusted products"
          Icon={FaHeartbeat}
          bgColor="bg-red-600"
        />
      </SwiperSlide>
      <div className="swiper-pagination bg-white"></div>
      <FaChevronRight className="swiper-button-next bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 right-2  shadow-md" />
      <FaChevronLeft className="swiper-button-prev bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 left-2 shadow-md" />
    </Swiper>
  );
}

export default BannerSlider;
