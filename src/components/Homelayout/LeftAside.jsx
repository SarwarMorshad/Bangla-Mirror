import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

const LeftAside = () => {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
