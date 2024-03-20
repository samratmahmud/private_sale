/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

const brands = [
   "/images/Group 1171275098.svg",
   "/images/Frame 1171275096.svg",
   "/images/dexguru_logotype.svg",
   "/images/Group 1171275101.svg",
   "/images/Group 1171275103.svg",
   "/images/Group 1171275113.svg",
   "/images/image 215.svg",
   "/images/Group 1171275114.svg",
];

function BrandGroup() {
   return (
      <section>
         <div className="container mb-[120px]">
            <div className="mb-8">
               <Titles
                  Title="Built With"
                  describtion="Invest into the new standart of on-chain trading"
               />
            </div>
            <div className="grid grid-cols-4 gap-x-12 gap-y-[30px]">
               {brands.map((BrandIcon, index) => (
                  <div
                     key={index}
                     className="bg-blue-border p-[1px] rounded-2xl"
                  >
                     <div className="bg-blue-gray p-4 rounded-2xl min-h-[166px] flex items-center justify-center">
                        <img src={BrandIcon} alt="" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <hr className="border border-white/20" />
      </section>
   );
}

export default BrandGroup;
