import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-white mb-4">CUSTOMER SERVICE</h2>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                Help & FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Orders History
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Advanced Search
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white mb-4">ABOUT US</h2>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Our Stores
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Corporate Sales
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white mb-4">MORE INFORMATION</h2>
          <ul>
            <li>
              <a href="/" className="hover:text-white">
                Affiliates
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Refer a Friend
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Student Beans Offers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Gift Vouchers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-white mb-4">SOCIAL MEDIA</h2>
          <SocialMediaLinks />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-gray-500">
          &copy; Copyright 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
