import React, { useState } from "react";

function Dark() {
  const [plan, setPlan] = useState("Monthly");

  return (
    <div className="flex w-fit rounded-full bg-gray-100 p-1 shadow-inner">
      {["Monthly", "Yearly"].map((item) => (
        <button
          key={item}
          onClick={() => setPlan(item)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            plan === item
              ? "bg-white text-black shadow"
              : "text-gray-500"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Dark;