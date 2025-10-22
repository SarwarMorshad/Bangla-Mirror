import React from "react";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img src={news.author.img} alt={news.author.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-lg text-gray-800">{news.author.name}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(news.author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-gray-600 hover:text-gray-800">
            <FaBookmark size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaShareAlt size={20} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h2>

        {/* Image */}
        <div className="flex justify-center">
          <img src={news.image_url} alt={news.title} className="w-3/6 h-auto rounded-lg mb-4 " />
        </div>

        {/* Details */}
        <p className="text-gray-700 mb-4">{news.details.substring(0, 200)}...</p>

        {/* Read More */}
        <button className="text-orange-500 font-semibold hover:text-orange-600">Read More</button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        {/* Rating */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-orange-500" size={20} />
          ))}
          <span className="text-gray-700 font-bold ml-2">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye size={20} />
          <span className="font-bold">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
