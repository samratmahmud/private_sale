import React from "react";
import PackageDetails from ".";
import {ChipProps} from "./Chip";

interface packageListS {
   buttonName: string;
   amount?: string;
   icons?: string;
   variant: ChipProps["variant"];
}

const packageList: packageListS[] = [
   {
      buttonName: "Early-Bird",
      amount: "$0.01",
      variant: "error",
   },
   {
      buttonName: "Seed Round",
      amount: "$0.01",
      variant: "info",
   },
   {
      buttonName: "Private Sale",
      amount: "$0.01",
      variant: "warning",
   },
   {
      buttonName: "Public Round",
      amount: "$0.01",
      variant: "success",
   },
   {
      buttonName: "Listing at Exchanges ",
      icons: "/images/solar_flag-bold-duotone.svg",
      variant: "primary",
   },
];

function Pricing() {
   return (
      <section>
         <div className="container">
            <h2 className="text-7xl font-semibold text-linear bg-header-title text-center mb-4">
               Buy $SWHALE token
            </h2>
            <p className="text-3xl text-center mb-20">
               Invest into the new standart of on-chain trading
            </p>
            <div className="max-w-[965px] mx-auto bg-[#BD9EFF]/15 py-[70px] px-[60px]">
               <h3 className="text-center text-6xl mb-10">
                  Buy in before price increases!
               </h3>
               <div className="grid grid-cols-5 gap-1">
                  {packageList.map(({buttonName, amount, variant}, index) => (
                     <PackageDetails
                        key={index}
                        buttonName={buttonName}
                        amount={amount}
                        variant={variant}
                        isActive={index === 0}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Pricing;
