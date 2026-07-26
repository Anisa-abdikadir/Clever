import React from "react";

function Status() {
  const stat = [
    {
      num: "2649+",
      title: "Pro Users",
    },
    {
      num: "1M+",
      title: "Tasks Organized",
    },
    {
      num: "297+",
      title: "Team Members",
    },
  ];

  return (
  <div className="max-w-6xl mx-auto mt-10 px-6">

    <div className="flex flex-col items-center justify-center gap-4">

      <div className="text-center mt-28">
        <h1 className="text-lg font-medium leading-tight sm:text-2xl sm:font-bold ">
          Unlock Your Productivity Potential with
          <br />
          Clever's Smart Solutions
        </h1>
      </div>


      {/* Big Container */}
      <div className="w-full  border border-gray-200  rounded-3xl p-2">

        {/* 3 Boxes */}
        <div className="grid md:grid-cols-3 gap-6">

          {stat.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center"
            >

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-orange-500"></div>

              <h2 className="text-5xl font-bold">
                {item.num}
              </h2>

              <p className="mt-3 text-gray-500">
                {item.title}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-orange-500"></div>

            </div>
          ))}

        </div>

      </div>


    </div>

  </div>
);
}

export default Status;