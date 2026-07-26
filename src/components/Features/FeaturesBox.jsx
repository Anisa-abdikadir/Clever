import React from "react";

function FeaturesBox({ box, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 md:flex-wrap  cursor-pointer ${className}`}>
      {box.map((items, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-gray-200/25 rounded-full flex items-center gap-2"
        >
          <div className="text-xl">{items.icon}</div>
          <div className="text-md">{items.title}</div>
        </div>
      ))}
    </div>
  );
}

export default FeaturesBox;
