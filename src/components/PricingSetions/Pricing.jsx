import React from 'react'
import PricingCard from "./PricingCard"
import Dark from './Dark'
import Button from '../Button';

function Pricing() {
  return (
    <div className="sm:text-center text-center  mt-10">
      {/* <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
        Pricing
      </span> */}
      <Button
        size="lg"rounded="full" variant="third"
        className="cursor-pointer font-semibold md:font-bold ">Pricing</Button>

         {/* <Button
                    size="lg" variant="secondary"rounded="full"
                    className="cursor-pointer">Join Waitlist</Button> */}
      

      <h2 className="md:text-4xl md:font-bold font-semibold  text-2xl mt-5">
        Affordable Pricing Options
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Explore our flexible pricing plans designed to fit your needs and
        budget.
      </p>

      {/* Dark Toggle */}
      <div className="flex justify-center mt-8">
        <Dark />
      </div>

      {/* Pricing Cards */}
      <PricingCard />
    </div>
  );
}

export default Pricing;