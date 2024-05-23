import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import ProductImageSlider from "../components/ProductImageSlider";
import ProductReel from "../components/product-reel";
import ProductDescriptionTabs from "../components/ProductDescriptionTabs";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import SpinnerPage from "../components/SpinnerPage";
import StarRating from "../components/StarRating";

function Product() {
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(
    function () {
      if (id) {
        const getProduct = async () => {
          try {
            const response = await fetch(`/api/products/${id}`);
            const responseData = await response.json();
            console.log(responseData);
            setProduct(responseData.data.product);
            setError(null); // Reset error state when request is successful
          } catch (error) {
            console.log(error);
            setError(error);
          } finally {
            setLoading(false);
          }
        };

        getProduct();
      }
    },
    [id]
  );

  console.log(product);

  if (loading) return <SpinnerPage />;

  if (error) return <ErrorPage error={error} />;

  return (
    <section className="">
      <div className="w-full flex flex-col items-center bg-gray-700 p-4">
        <span className="text-lg text-white">
          HOME SHOP/ AYURVEDIC/ NUTUREMITE ASHWAGANDHA POWDER 250 GMS
        </span>
        <h1 className="text-4xl text-semibold text-white">
          Nuturemite Ashwagandha Powder 250 gms
          {product.name}
        </h1>
      </div>

      <div className="py-4 px-6 flex flex-col items-center">
        <div className="flex gap-2 items-center">
          {/* <div>Image</div> */}
          <ProductImageSlider
            images={[product.imageCover, ...product.images]}
          />
          <div className="p-2 flex flex-col gap-2 items-start max-w-lg">
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <StarRating rating={product.rating} />
            <div className="flex gap-1 items-end mb-1">
              <span className="text-lg line-through">${product.price}</span>
              <span className="text-3xl font-semibold">
                ${product.discountPrice}
              </span>
            </div>
            <div className="capitalize text-md">
              <span className="text-gray-700 font-bold mr-2">Category:</span>
              <span className="">
                {product.categories.map((obj) => obj.name).join(", ")}
              </span>
            </div>
            <p className="text-md text-gray-500 font-semibold uppercase">
              {product.description}
            </p>
            <div className="border-t border-gray-300 w-full mb-2" />
            <div className="flex gap-4 items-center">
              <div className="flex">
                <div
                  className="py-1 px-2 border-gray-900 border-2 text-xl"
                  onClick={() =>
                    setCounter(counter - 1 >= 1 ? counter - 1 : counter)
                  }
                >
                  -
                </div>
                <div className="py-1 px-2 border-gray-900 border-t-2 border-b-2 text-xl">
                  {counter}
                </div>
                <div
                  className="py-1 px-2 border-gray-900 border-2 text-xl"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </div>
              </div>
              <button className="flex gap-1 items-center bg-gray-700 text-white py-1.5 px-2">
                <IoCartOutline className="w-6 h-6" />
                <span className="text-lg ">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductDescriptionTabs product={product} />

      <div className="py-4 px-2">
        <ProductReel title="Related Products" />
      </div>
    </section>
  );
}

export default Product;
