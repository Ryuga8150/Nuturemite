import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

ProductReel.propTypes = {
  title: PropTypes.string,
};

function ProductReel({ title }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const swiperParams = {
    modules: [Navigation, Autoplay],
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 3000 },
    // loop: true,
  };

  useEffect(function () {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/products/");
        const responseData = await response.json();
        console.log(responseData);
        setProducts(responseData.data.products);
        setError(null); // Reset error state when request is successful
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // console.log(products);

  return (
    <section className="px-4 py-6 w-full bg-white rounded-lg overflow-x-hidden h-fit">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <Swiper {...swiperParams} className="w-full overflow-x-hidden">
        {loading && <span>Loading...</span>}

        {error && <span>Error While Fetching Data!!!</span>}
        <div className="flex ">
          {products?.map((product, ind) => (
            <div key={ind} className="flex-1">
              <SwiperSlide className="!w-auto h-fit">
                <ProductCard product={product} />
              </SwiperSlide>
            </div>
          ))}
        </div>

        <FaChevronRight className="swiper-button-next bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 right-2 shadow-md z-10" />
        <FaChevronLeft className="swiper-button-prev bg-white p-0.5 text-gray-800 w-10 h-10 rounded-full flex justify-center items-center absolute top-1/2 left-2 shadow-md z-10" />
      </Swiper>
    </section>
  );
}

export default ProductReel;
