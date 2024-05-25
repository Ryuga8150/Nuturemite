import { useEffect, useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { signOutSuccess } from "../../redux/user/userSlice";

function NavbarButtonLinks() {
  const [active, setActive] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // New state to control dropdown visibility
  const userState = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const myAccountRef = useRef(null);

  const handleLogout = async function () {
    try {
      const res = await fetch(`/api/auth/logout`);
      const data = await res.json();
      // console.log(data);
      if (!data || data.status !== "success")
        throw new Error("Oops Something went wrong!!");

      setLoggedIn(false); // Update loggedIn state after logout
      dispatch(signOutSuccess());
      toast.success("Logout Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    // Update loggedIn state based on userState
    setLoggedIn(!!userState?.data.user);
  }, [userState]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        myAccountRef.current &&
        !myAccountRef.current.contains(event.target)
      ) {
        setShowDropdown(false); // Close the dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [myAccountRef]);

  const handleMyAccountClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
    // setActive(active === -1 ? 3 : -1); // Toggle active state
    setActive(5); // Toggle active state
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto gap-2 px-4 flex justify-between items-center py-4">
        {[
          { text: "Home", to: "/" },
          { text: "Blog" },
          { text: "About Us" },
          ...(loggedIn ? [{ text: "Cart", to: "/cart" }] : []), // Conditionally render Cart link
        ].map(({ text, to = "/" }, ind) => (
          <Link
            key={ind}
            to={to}
            className={cn("px-2 py-1  font-semibold text-xl rounded", {
              "bg-blue-400 text-white ": ind === active,
              "hover:bg-blue-500 hover:text-white text-blue-600":
                ind !== active,
            })}
            onClick={() => setActive(ind)}
          >
            {text}
          </Link>
        ))}

        {loggedIn ? (
          <div className="relative text-xl" ref={myAccountRef}>
            <div
              className={cn(
                "px-2 py-1 font-semibold text-blue-600 hover:text-blue-700 cursor-pointer rounded",
                {
                  "bg-blue-400 text-white ": 5 === active,
                  "hover:bg-blue-500 hover:text-white text-blue-600":
                    5 !== active,
                }
              )}
              onClick={handleMyAccountClick} // Handle click on "My Account"
            >
              My Account
            </div>
            {showDropdown && ( // Render dropdown only when showDropdown is true
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-40">
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >
                  My Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                >
                  Log Out &rarr;
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-2 py-1 flex items-center font-semibold text-blue-600 hover:text-blue-700"
          >
            <FaUser className="mr-1" />
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavbarButtonLinks;
