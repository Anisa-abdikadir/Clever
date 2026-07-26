import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdGroups, MdOutlineAnalytics } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import FeaturesBox from "../Features/FeaturesBox";

function PricingFeature() {
  const box = [
    {
      icon: <FaTasks />,
      title: "Task Management",
    },
    {
      icon: <MdGroups />,
      title: "Collaboration Tools",
    },
    {
      icon: <IoNotifications />,
      title: "Deadline Alerts",
    },
    {
      icon: <FiRefreshCw />,
      title: "Real-Time Sync",
    },
    {
      icon: <MdOutlineAnalytics />,
      title: "Analytics",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex-1 h-[2px] bg-gray-200 rounded-full"></div>

        <p className="font-medium">All Plans Include</p>

        <div className="flex-1 h-[2px] bg-gray-200 rounded-full"></div>
      </div>

      <FeaturesBox box={box} className="justify-center" />

    </div>
  );
}

export default PricingFeature;