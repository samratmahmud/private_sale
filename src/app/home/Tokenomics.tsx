/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

function Tokenomics() {
   return (
      <section>
         <div className="container mb-44">
            <div className="mb-[72px]">
               <Titles
                  headLine="Tokenomics"
                  describtion="Invest into the new standart of on-chain trading"
               />
            </div>
            <div className="max-w-[1240px] mx-auto bg-blue-700/10 py-14 pl-20 pr-11 flex gap-7 items-center relative">
               <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-24 bg-primary-600/80 blur-[100px]" />
               <div>
                  <img src="/images/Frame 1171275090.png" alt="" />
               </div>
               <div>
                  <img src="/images/Group 1171275110.png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Tokenomics;
