import React from 'react'
import { IoArrowRedoOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";
import arrowRotate from "../../assets/Benefits_ImageAndIcons/arrow-rotate.png";
import Button from '../Button';
import { IoLogoYoutube } from "react-icons/io5";

function Hero() {
   const images=[
          {
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUdvgNFzeeSPwqJjRWllC6mpJ1pbKze_67SEyC4ZF3Q&s=10"
          },
          {
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkq1VWsXJ42hXhdy6MkD5HoUV3HBscaPNPD3rbhS0GXQ&s=10"
          }
        ]
  return (
    // top section 
    <div className='max-w-6xl mx-auto px-6 mt-14   '>
      <div className='flex gap-2 flex-col justify-center items-center '>
        <div className=' hidden md:flex gap-2 rounded-full items-center bg-gray-100/40 border border-gray-300/30  px-4 py-2'>
      
              <div className=' flex -space-x-2'>
              {images.map((items, index) => (
                <div key={index} className='relative'>
                  <img
                    className='w-7 h-7 rounded-full object-cover '
                    src={items.image}
                    alt=""
                  />
                </div>
              ))}
          </div>
          <span className="text-gray-600 text-sm">
            Join <span className="font-bold">1000+</span> Members
          </span>
        </div>
         <h1 className='text-center text-md sm:text-6xl  sm:font-semibold font-bold  leading-tight'>
             Your Team's Daily Ops <br />in One Clever Hub</h1>

             <p className='text-center text-sm md:text-2xl text-gray-500 max-w-xl  mx-auto mt6'>
                  Clever helps you simplify your stack and supercharge your team, <br />
                    all with one clean, scalable platform.
             </p>
             <div className="flex justify-center mt-3 mr-14">
                  <img className="w-20 h-10 mt-5 mr-2" src={arrowRotate} alt="" />

                       <Button
                          size="lg" variant="secondary"rounded="full"
                          className="cursor-pointer mt-5 ">  Get Beta Access
                        </Button>
                </div>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <CiCircleAlert />
                  <p className="text-gray-500 ">
                    Join a growing community of 10k+ users
                  </p>
                </div>
               </div>
               <div className='mt-5'>
                 <iframe
                    className="w-5/6 mx-auto rounded-2xl shadow h-[500px]"
                    src="https://www.youtube.com/embed/4PseNalfS5E"
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

               </div>
             
              

       
{/* top section */}
{/* bottom section */}
    </div>



  )
}

export default Hero
