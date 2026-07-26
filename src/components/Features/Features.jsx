import React from 'react'
import { FaTasks } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";

import { FiRefreshCw } from "react-icons/fi";
import Button from '../Button';
import FeaturesBox from './FeaturesBox';


function Features() {


const box=[
    {
        icon:<FaTasks />,
        title:"Task Management"
    },
    {
        icon:<MdGroups />,
        title:"Collaboration Tools"
    },
    {
        icon:<IoNotifications />,
        title:"Deadline Alerts"
    },
    {
        icon:<FiRefreshCw/>,
        title:"Real-Time Sync"
    },
    {
        icon:<MdOutlineAnalytics />,
        title:"Real-Time Sync"
    },
];


return (

<div className='max-w-6xl mx-auto mt-10 '>


  <div className="flex-row sm:flex items-center gap-2">


    {/* Image */}
    <div className="sm:w-1/2 w-fit ">

      <img 
      src="https://framerusercontent.com/images/zHQLerohYFQd4HvxjheGHuRaXRw.svg?width=570&height=509"
        alt=""
        className="w-full h-100 rounded-lg"/>

    </div>
    {/* Content */}
    <div className="sm:w-1/2 w-fit p-4 ">

      <p className="md:font-bold font-medium mb-6 md:text-4xl text-2xl">
        EXPLORE CLEVER'S Key Features
      </p>

      <FeaturesBox box={box} className=' flex-row-2 items-center justify-center md:items-center'/>
       <Button
            size="lg" variant="secondary"rounded="full"
            className="cursor-pointer mt-5  ">  Get Beta Access
          </Button>
     

      
      
    </div>
  </div>


</div>

)

}

export default Features;