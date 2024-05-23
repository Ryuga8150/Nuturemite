import { useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
function NavbarButtonLinks() {
  const [active, setActive] = useState(0);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {[
          { text: "Home", to: "/" },
          { text: "Blog" },
          { text: "My Orders", to: "/my-orders" },
          { text: "Cart", to: "/cart" },
          // { text: "My Account" },
          { text: "About Us" },
          { text: "Log In", Icon: FaUser },
          // { text: "Register", Icon: FaUserPlus },
        ].map(({ text, to = "/", Icon }, ind) => (
          <Link
            key={ind}
            to={to}
            className={cn("px-2 py-1  font-semibold ", {
              "bg-blue-400 text-white rounded": ind === active,
              "hover:bg-blue-500 hover:text-white text-blue-600":
                ind !== active,
            })}
          >
            <div className={cn("", { "flex items-center": Icon })}>
              {Icon && <Icon className="mr-1" />}
              {text}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavbarButtonLinks;
