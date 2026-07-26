import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Dark from './Dark'
import Button from "../Button";


function PricingCard() {

    const plans = [

        {
            title: "Basic Plan",
            price: "$10",
            period: "/per month",
            description: "Essential features for individuals",
            button: "Get Started",
            features: [
            "Task Management",
            "Data Encryption",
            "Custom Workflows",
            "Deadline Alerts",
            "Real-Time Sync",
            "Collaboration Tools",
            ],
        },
                {
            title: "Business Plan",
            price: "$20",
            period: "/per month",
            description: "Advanced tools for growing teams",
            popular: true,
            button: "Get Started",
            features: [
            "Task Management",
            "Data Encryption",
            "Custom Workflows",
            "Deadline Alerts",
            "Real-Time Sync",
            "Collaboration Tools",
            ],
        },
        {
            title: "Enterprise Plan",
            price: "$40",
            period: "/per month",
            description: "Comprehensive solutions for companies",
                    button: "Get Started",
            features: [
            "Task Management",
            "Data Encryption",
            "Custom Workflows",
            "Deadline Alerts",
            "Real-Time Sync",
            "Collaboration Tools",
            ],
        },
];
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
           
              <div
                key={index}
                className={`relative bg-white rounded-2xl border p-7 shadow-sm hover:shadow-xl transition duration-300 text-left
                ${plan.popular ? "border-orange-500 border-2" : "border-gray-200"}`}
              >


              {plan.popular && (
                 <Button
                    size="lg"rounded="full" variant="third"
                    className="cursor-pointer  text-xs py-1 px-3 right-6 absolute">Pricing</Button>
                

              )}

              <h3 className="font-semibold text-lg">
                {plan.title}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <h1 className="text-5xl font-bold">
                  {plan.price}
                </h1>

                <span className="text-gray-500">
                  {plan.period}
                </span>
              </div>
              {/* <div></div> */}

              <p className="text-gray-500 text-sm mt-3">
                {plan.description}
              </p>
                    <Button
                      size="lg"rounded="full" variant="secondary"
                      className="cursor-pointer w-full py-3 mt-5 font-medium transition  ">  {plan.button}</Button>

              <h4 className="font-semibold  mt-6 text-left ">
                What's Included
              </h4>

              <ul className="space-y-4 mt-4">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <FaCheckCircle className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
} export default PricingCard;