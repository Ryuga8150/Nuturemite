import Sidebar from "./Sidebar";
import ProductReel from "./product-reel";

function ProductSection() {
  return (
    <div className="flex gap-6 w-full bg-gray-100 py-6 px-4">
      <Sidebar />
      <div className="flex flex-col gap-6 flex-1">
        <ProductReel title="Popular Products" />
        <ProductReel title="Popular Products" />
      </div>
    </div>
  );
}

export default ProductSection;
