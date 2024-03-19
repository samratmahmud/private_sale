/* eslint-disable @next/next/no-img-element */
import React from "react";
import Chip, {ChipProps} from "./Chip";

interface packageProps extends ChipProps {
   buttonName: string;
   amount?: string;
   icons?: string;
   isActive?: boolean;
   handelClick?: () => void;
}

function PackageDetails(props: packageProps) {
   const {buttonName, amount, variant, icons, isActive, handelClick} = props;

   return (
      <div className="flex flex-col gap-[5px] items-center">
         <div className="min-h-[40px] flex items-center justify-center">
            <Chip variant={variant} />
         </div>
         <button
            onClick={handelClick}
            className={`w-full text-lg py-2.5 px-1 border  ${
               isActive
                  ? "bg-amber-600 border-amber-600"
                  : "bg-transparent border-white/15"
            }`}
         >
            {buttonName}
         </button>
         {amount && (
            <p className="text-amber-600 font-bold text-2xl">{amount}</p>
         )}
         {icons && <img className="w-6 h-6" src={icons} alt="" />}
      </div>
   );
}

export default PackageDetails;
