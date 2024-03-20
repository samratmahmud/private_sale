/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

function Utilities() {
   return (
      <section>
         <div className="container mb-[120px]">
            <div className="mb-[72px]">
               <Titles
                  Title="Token Utilities"
                  describtion="Invest into the new standart of on-chain trading"
               />
            </div>
            <div className="relative">
               <img src="/images/Group 1171275111 (2).png" alt="" />
               <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
                  <img src="/images/Group 1171275112.png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Utilities;
