import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";

export default function Join() {
  const join = [
    {
      icon: <FaCheckCircle />,
      title: "Weekly Access",
    },
    {
      icon: <FaCheckCircle />,
      title: "Exclusive Updates",
    },
    {
      icon: <FaCheckCircle />,
      title: "Early Testing",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl  mx-auto px-5">
        <div className="relative overflow-hidden rounded-[35px] bg-[#111111] py-20 px-8 text-center">
          {/* Background Circles */}
          <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full border border-orange-500 opacity-20"></div>

          <div className="absolute -right-24 top-0 w-72 h-72 rounded-full border border-gray-700 opacity-30"></div>

          {/* Content */}
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            Join Us Today
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Take the first step towards streamlined productivity.
            Sign up now and start your free trial with Clever.
          </p>

          {/* Features */}
          <div className=" flex-col md:flex-row flex justify-center gap-6 mt-10">
            {join.map((item, index) => (
              <div
                key={index}
                className=" flex  items-center gap-2 text-white"
              >
                <span className="text-green-500 text-lg">
                  {item.icon}
                </span>

                <span className="text-gray-300">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        
           <Button
              size="lg"rounded="full" variant="secondary"
              className="cursor-pointer  mt-5">Get Early Access</Button>
        </div>
      </div>
    </div>
  );
}
