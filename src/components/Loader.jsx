import React from "react";
import loaderGif from "../assets/logo-animated.gif"; 

const Loader = ({ size = 300, altText = "Loading..." }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <img src={loaderGif} alt={altText} width={size} height={size} />
    </div>
  );
};

export default Loader;