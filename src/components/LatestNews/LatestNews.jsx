import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-8">
        <p className="font-semibold">
          🚀 SpaceTech Corp announces successful test flight of its reusable lunar shuttle !
        </p>
        <p className="font-semibold">
          💰 Global markets rally as investors bet on AI-driven productivity boom !
        </p>
        <p className="font-semibold">
          🏙️ Berlin introduces world’s first fully autonomous public bus network !
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
