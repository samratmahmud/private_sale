/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface ChipProps {
   variant: "success" | "error" | "info" | "warning" | "primary";
   icon?: string;
}

function Chip(props: ChipProps) {
   const {variant = "success", icon} = props;

   let data = {
      error: {
         name: "closed",
         color: "text-red-600 border-red-600",
         icon: "/images/Vector (4).svg",
      },
      info: {
         name: "coming soon",
         color: "text-amber-600 border-amber-600",
         icon: "/images/Group.svg",
      },
      warning: {
         name: "Closing in April 2024",
         color: "text-amber-300 border-amber-300",
         icon: undefined,
      },
      success: {
         name: "May 2024",
         color: "text-emerald-600 border-emerald-600",
         icon: undefined,
      },
      primary: {
         name: "Q2 2024",
         color: "text-indigo-400 border-indigo-400",
         icon: undefined,
      },
   };

   return (
      <div
         className={`flex items-center gap-0.5 rounded-full border py-0.5 px-[7px] ${data[variant].color}`}
      >
         {data[variant].icon && (
            <img
               className="w-[18px] aspect-square p-[1px]"
               src={data[variant].icon}
               alt=""
            />
         )}
         <p
            className={`font-semibold ${
               data[variant].icon
                  ? "leading-[1.2em] text-lg"
                  : "leading-[1.025em] text-md"
            }`}
         >
            {data[variant].name}
         </p>
      </div>
   );
}

export default Chip;
