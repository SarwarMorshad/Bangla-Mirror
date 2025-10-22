import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUs from "../FindUs/FindUs";

const RightAside = () => {
  return (
    <div className="sticky top-0 h-screen overflow-y-auto">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;
