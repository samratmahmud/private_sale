/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

const packageList = [
   {
      icon: "/images/icon-park-outline_connect.png",
      title: "2023 February",
      describtion:
         "Product development on decentralized ecosystem (Chains: Arbitrum, Optimism, BSC)",
   },
   {
      icon: "/images/arcticons_invest.png",
      title: "2023 November",
      describtion:
         "Grant from Oasis Network to build confidentiality layer (OPL) for traders",
   },
   {
      icon: "/images/arcticons_moneytracker.png",
      title: "Q2 2024",
      describtion: "MVP Launch: Tier Levels & reward system for traders",
   },
   {
      icon: "/images/arcticons_adobe-analytics.png",
      title: "Q2 2024",
      describtion: "MVP Launch: Tier Levels & reward system for traders",
   },
   {
      icon: "/images/Frame 1171275107.png",
      title: "Q2 2024",
      describtion: "MVP Launch: Tier Levels & reward system for traders",
   },
];

function Roadmap() {
   return (
      <section>
         <div className="container mb-36">
            <div>
               <Titles
                  headLine="Roadmap"
                  describtion="Invest into the new standart of on-chain trading"
               />
            </div>
            <div className="bg-black-cercle bg-no-repeat bg-cover mt-16 relative z-0">
               <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary-600/40 blur-[100px] w-52 h-[304px] -z-10" />
               <div className="grid grid-cols-5 gap-5 max-w-[1240px] mx-auto px-[30px] pt-11">
                  {packageList.map(({icon, title, describtion}, index) => (
                     <div key={index} className="bg-blue-orange rounded-[20px]">
                        <div className="bg-black m-[1px] px-2.5 pt-10 pb-2.5 flex flex-col items-center rounded-[20px] min-h-[263px] h-[99%]">
                           <div className="w-[60px] aspect-square flex items-center justify-center p-2.5 bg-blue-black rounded-[30px]">
                              <img
                                 className="rounded-[30px]"
                                 src={icon}
                                 alt=""
                              />
                           </div>
                           <h3 className="text-2xl font-bold mb-2 mt-4">
                              {title}
                           </h3>
                           <p className="text-white/70 text-center">
                              {describtion}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Roadmap;
