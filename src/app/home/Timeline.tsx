/* eslint-disable @next/next/no-img-element */
import React from "react";

const timing = [
   {
      name: "DAYS",
      value: "05",
   },
   {
      name: "HOURS",
      value: "23",
   },
   {
      name: "MINUTES",
      value: "35",
   },
   {
      name: "SECONDS",
      value: "06",
   },
];

function Timeline() {
   return (
      <div className="flex justify-center gap-4">
         {timing.map(({name, value}, index) => (
            <div key={index} className="flex flex-col items-center gap-[18px]">
               <h3 className="text-md leading-[1.22em] font-bold text-neutral-200">
                  {name}
               </h3>
               <div className="bg-black px-1.5 py-3.5 rounded-md">
                  <p className="text-8xl font-bold uppercase flex items-center justify-center">
                     {value}
                  </p>
                  <img className="-mt-1.5" src="/images/Group 1.png" alt="" />
               </div>
            </div>
         ))}
      </div>
   );
}

export default Timeline;
