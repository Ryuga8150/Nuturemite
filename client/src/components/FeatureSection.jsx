import { FaShippingFast } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { Ri24HoursFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";

function FeatureSection() {
  return (
    <div className="flex justify-between bg-white py-4 px-2 gap-4">
      {[
        {
          title: "free shipping",
          description: "Free Shipping on all orders over $2000",
          Logo: FaShippingFast,
        },
        {
          title: "money back guarantee",
          description: "100% money back guarantee",
          Logo: CiDollar,
        },
        {
          title: "online support 24/7",
          description: "Online support available 24/7",
          Logo: Ri24HoursFill,
        },
        {
          title: "secure payment",
          description: "100% Secure Payments in our portal",
          Logo: RiSecurePaymentFill,
        },
      ].map(({ title, description, Logo }, ind) => (
        <div key={ind} className="flex items-center gap-4">
          <Logo className="w-12 h-12 text-green-500 p-0.5" />
          <div className="flex flex-col gap-1">
            <h3 className="uppercase font-semibold">{title}</h3>
            <span className="text-sm">{description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureSection;
