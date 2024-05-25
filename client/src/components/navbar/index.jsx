import React from "react";

import SocialMediaLinks from "../SocialMediaLinks";
import NavbarButtonLinks from "./navbar-button-links";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/nuturemite-logo.jpg" alt="nuturemite logo" />
        </div>
      </Link>

      <div className="flex flex-col items-center gap-1 justify-items-end">
        {/* <div className="flex gap-2">
          <p>about us</p>
          <p>contact us</p>
          <p>phone number</p>
          <p>Search</p>
        </div> */}

        <SocialMediaLinks />
        <NavbarButtonLinks />
      </div>
    </div>
  );
};

export default Navbar;
