import React from "react";
import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

SocialMediaLinks.propTypes = {
  className: PropTypes.string,
};

function SocialMediaLinks({ className = "" }) {
  const socialMediaLogos = [
    { Logo: FaFacebookF },
    { Logo: FaInstagram },
    { Logo: FaLinkedinIn },
    { Logo: FaTwitter }, // Corrected usage of FaTwitter
    { Logo: FaYoutube },
  ];

  return (
    <div className="flex gap-2 align-center">
      {/* Map over the array of social media logos */}
      {socialMediaLogos.map((socialMedia, index) => {
        const { Logo } = socialMedia;
        return (
          <div key={index} className="bg-slate-100 p-1.5 rounded-xl">
            <Logo className="w-3.5 h-3.5" />
          </div>
        );
      })}
    </div>
  );
}

export default SocialMediaLinks;
