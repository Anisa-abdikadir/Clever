import React from 'react'
import {
  FaLaptop,
  FaBell,
  FaPenNib,
  FaUsers,
} from "react-icons/fa";

function OurProduct() {
    const product=[
        {
           icon: <FaLaptop />,
           title: "Instant Synchronization Across Devices",
           },
             {
           icon: <FaBell />,
           title: "Collaborative Project Spaces",
         },
         {
           icon: <FaPenNib />,
           title: "Timely Deadline Notifications",
         },
         {
           icon: <FaUsers />,
           title: "Offline Task Management",
         },
           
    ]
  return (
    <div className='max-w-6xl mx-auto px-6 mt-14'>
        <div className='flex-row sm:flex  gap-10 items-center'>
            <div className='sm:w-1/2 w-fit '>
            <h1  className='font-medium sm:font-bold text-2xl sm:text-6xl'>
                Advantages of Using Our Product
            </h1>
            <p className='mt-5 mb-4'>Experience streamlined workflows and enhanced productivity with Clever’s powerful benefits.</p>
            <div className="grid grid-cols-2 gap-4 mt-5 p-1">

            {product.map((items, index) => (
                <div key={index}
                className="px-4 py-2  rounded-sm bg-gray-100/70 border border-gray-300  flex items-center gap-2"
                >

                <div className=" rounded-xl border p-2 text-sm  bg-primary text-white  ">{items.icon}</div>
                <div className='font-sm text-sm sm:text-x sm:font-medium leading-5'>{items.title}</div>
                </div>
            ))}
            </div>
        </div>
        <div>
            <img src="https://framerusercontent.com/images/0LZTNrll0DQmp0EvsUf2hydkTs4.svg?width=570&height=521" alt="" />
        </div>
        </div>

      
    </div>
  )
}

export default OurProduct
