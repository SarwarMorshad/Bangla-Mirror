import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, image_url, details } = news;
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bangla Mirror</h1>

      {/* News Article Card */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        {/* Featured Image */}
        <figure>
          <img src={image_url} alt="News article" className="w-full h-auto" />
        </figure>

        {/* Card Body */}
        <div className="card-body p-8">
          {/* Article Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">{title}</h2>

          {/* Article Content */}
          <div className="text-gray-600 leading-relaxed space-y-4 mb-6">
            <p>{details}</p>
          </div>

          {/* Back Button */}
          <Link
            to={`/category/${category_id}`}
            className="btn bg-pink-600 hover:bg-pink-700 text-white border-none"
          >
            <FaArrowLeft />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
