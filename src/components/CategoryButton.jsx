import React, { useState } from "react";

const CategoryButton = ({ category, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <button
      className={`transition-all shadow-md ${
        isSelected ? "text-[#fbb203] scale-105" : "text-white hover:text-[#FBB203]"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-10 w-44 flex items-center justify-center">
        {React.cloneElement(category.logo, {
          className: "transition-colors duration-200",
          style: { fill: isHovered || isSelected ? "#FBB203" : "#FFF" }, // Change color on hover or selection
        })}
      </div>
      {category.name}
    </button>
  );
};

export default CategoryButton;
