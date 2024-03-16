import React from "react";

export interface ChipProps {
   variant: "success" | "error" | "info" | "warning";
}

function Chip(props: ChipProps) {
   const {variant = "success"} = props;

   let data = {
      success: {
         name: "New Lead",
         bgC: "bg-emerald-800",
      },
      error: {
         name: "CNA",
         bgC: "bg-orange-900",
      },
      info: {
         name: "Lockdown",
         bgC: "bg-primary-900",
      },
      warning: {
         name: "Drop",
         bgC: "bg-amber-900",
      },
   };

   return (
      <div>
         <span className={`w-1 h-1 rounded-full ${data[variant].bgC}`} />
         <p className="text-xs font-medium">{data[variant].name}</p>
      </div>
   );
}

export default Chip;
