import React from 'react'
import {
  FaLaptop,
  FaBell,
  FaPenNib,
  FaUsers,
} from "react-icons/fa";

function Platforms() {
  const feature =[
    {
    icon: <FaLaptop />,
    title: "Cross-Platform Compatibility",
    },
      {
    icon: <FaBell />,
    title: "Smart Deadline Reminders",
  },
  {
    icon: <FaPenNib />,
    title: "Intuitive User Interface",
  },
  {
    icon: <FaUsers />,
    title: "Real-time Collaboration Tools",
  },
    
    
  ]

  return (
    <div  className='max-w-6xl mx-auto px-6 mt-14'>
      {/* line */}
     <div className="flex items-center justify-center gap-4">
  <div className="flex-1 rounded-full h-[2px] bg-secondary/3"></div>

  <img
    className="w-12 h-12 rounded-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC8q0dcWa7-sa-Ba5qHX_RNKn-UK-iXBaxiaChGicsw&s=10"
    alt="logo"
  />

  <div className="flex-1 h-[2px] bg-secondary/3 rounded-full"></div>
</div>

       <div className="grid md:grid-cols-4 mt-20 gap-2  sm:gap-6  sm:border-0 md:border-r-h-8">

        {feature.map((item, index) => (
          <div
            key={index}
           
            className="relative flex flex-col items-center text-center
            after:absolute after:right-0 after:top-6 after:h-20 after:w-[1px] after:bg-gray-200 
            last:after:hidden"
          >
          
            <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mb-5">
              {item.icon}
            </div>

            <h3 className="font-semibold text-sm sm:text-xl leading-7 max-w-[170px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      
      
      <div>

      </div>

      
      
    </div>
  )
}

export default Platforms
