import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-xs text-center p-1">
      Swift Sole Shoes &copy; {currentYear}
    </div>
  );
};

export default Footer;
