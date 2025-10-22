import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="card ">
      <div className="card-body">
        <h2 className="card-title font-bold mb-4">Find Us On</h2>

        <div className="space-y-0 border border-base-300 rounded-lg overflow-hidden">
          <a
            href="https://facebook.com"
            className="flex items-center gap-4 p-4 hover:bg-base-200 transition-colors border-b border-base-300"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <FaFacebook className="text-blue-600 text-xl" />
            </div>
            <span className="text-base-content font-medium">Facebook</span>
          </a>

          <a
            href="https://twitter.com"
            className="flex items-center gap-4 p-4 hover:bg-base-200 transition-colors border-b border-base-300"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <FaTwitter className="text-blue-400 text-xl" />
            </div>
            <span className="text-base-content font-medium">Twitter</span>
          </a>

          <a
            href="https://instagram.com"
            className="flex items-center gap-4 p-4 hover:bg-base-200 transition-colors"
          >
            <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
              <FaInstagram className="text-pink-600 text-xl" />
            </div>
            <span className="text-base-content font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
