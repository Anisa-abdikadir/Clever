import { FaTasks } from "react-icons/fa";
import { MdGroups, MdOutlineAnalytics } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import Button from "../Button";
export default function Process() {
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
     
    ];
  return (
    <div className="">

      <div className="max-w-7xl mx-auto px-6 ">

        <div className="text-center">
           <Button
              size="lg"rounded="full" variant="third"
              className="cursor-pointer ">Join Waiting List</Button>

          <h2 className="md:text-5xl text-2xl font-bold mt-5">
            Get Early Access Now
          </h2>

          <p className="text-gray-500 mt-3">
            Join our waiting list today.
          </p>
          <div className="grid grid-cols-2 md:w-3/6 mx-auto items-center p-2  md:grid-cols-3 gap-2 flex-wrap md:gap-1  mt-4 ">
              {box.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center flex-row gap-1    bg-gray-100 rounded-full px-2  md:px-4 py-2 md:whitespace-nowrap  "
                >
                  <div className="p-3 rounded-full bg-green-500 flex items-center justify-center text-white">
                            {item.icon}
                    </div>
                  <span className="text-sm font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

        </div>


        <form
          className="  bg-gray-100 md:w-3/6 mx-auto   mt-12 rounded-3xl p-8 space-y-5">

          <input type="text"placeholder="Name"
            className="w-full p-4 rounded-xl border  outline-none"/>

          <input type="email"placeholder="Email"className="w-full p-4 rounded-xl border outline-none"/>

          <input type="text"placeholder="Company Website"
            className="w-full p-4 rounded-xl border outline-none"/>

          {/* <button
            className="w-full bg-orange-500 hover:bg-orange-600text-white py-4 rounded-full font-semibold duration-300 "
          >
            Request Early Access
          </button> */}
           <Button
        size="lg"rounded="full" variant="secondary"
        className="cursor-pointer w-full "> Request Early Access</Button>

        </form>

      </div>

    </div>
  );
}