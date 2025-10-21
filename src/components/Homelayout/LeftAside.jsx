import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
