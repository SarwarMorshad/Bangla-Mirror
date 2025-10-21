import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const date = format(new Date(), "EEEE , MMMM MM, yyyy");
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="Logo" className="w-[350px]" />
      <p className="text-accent">Journalism without fear and favor</p>
      <p className="">{date}</p>
    </div>
  );
};

export default Header;
