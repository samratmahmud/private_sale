/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import PackageDetails from ".";
import {ChipProps} from "./Chip";
import Button from "@/components/common/Button";

interface PackageListS {
   buttonName: string;
   amount?: string;
   icons?: string;
   network?: {
      title: string;
      items: {
         icon: string;
         name: string;
      }[];
   }[];
   input?: {
      titleI: string;
      iconI: string;
      placeholderI: string;
   }[];
   variant: ChipProps["variant"];
}

const packageList: PackageListS[] = [
   {
      variant: "error",
      buttonName: "Early-Bird",
      amount: "$0.01",
      network: [
         {
            title: "Select network",
            items: [
               {
                  icon: "/images/ETH.svg",
                  name: "Ethereum",
               },
               {
                  icon: "/images/Layer_x0020_1.svg",
                  name: "Arbitrum",
               },
               {
                  icon: "/images/image 183.svg",
                  name: "Binance Smart Chain",
               },
            ],
         },
      ],
      input: [
         {
            titleI: "USDT you pay",
            iconI: "/images/Group 1171275115.svg",
            placeholderI: "0",
         },
         {
            titleI: "$SWHALE you receive",
            iconI: "/images/Frame 59730.svg",
            placeholderI: "0",
         },
      ],
   },
   {
      variant: "info",
      buttonName: "Seed Round",
      amount: "$0.01",
      network: [
         {
            title: "Select network",
            items: [
               {
                  icon: "/images/Layer_x0020_1.svg",
                  name: "Arbitrum",
               },
               {
                  icon: "/images/image 183.svg",
                  name: "Binance Smart Chain",
               },
               {
                  icon: "/images/ETH.svg",
                  name: "Ethereum",
               },
            ],
         },
      ],
      input: [
         {
            titleI: "$SWHALE you receive",
            iconI: "/images/Frame 59730.svg",
            placeholderI: "0",
         },
         {
            titleI: "USDT you pay",
            iconI: "/images/Group 1171275115.svg",
            placeholderI: "0",
         },
      ],
   },
   {
      variant: "warning",
      buttonName: "Private Sale",
      amount: "$0.01",
      network: [
         {
            title: "Select network",
            items: [
               {
                  icon: "/images/image 183.svg",
                  name: "Binance Smart Chain",
               },
               {
                  icon: "/images/ETH.svg",
                  name: "Ethereum",
               },
               {
                  icon: "/images/Layer_x0020_1.svg",
                  name: "Arbitrum",
               },
            ],
         },
      ],
      input: [
         {
            titleI: "USDT you pay",
            iconI: "/images/Group 1171275115.svg",
            placeholderI: "0",
         },
         {
            titleI: "$SWHALE you receive",
            iconI: "/images/Frame 59730.svg",
            placeholderI: "0",
         },
      ],
   },
   {
      variant: "success",
      buttonName: "Public Round",
      amount: "$0.01",
      network: [
         {
            title: "Select network",
            items: [
               {
                  icon: "/images/ETH.svg",
                  name: "Ethereum",
               },
               {
                  icon: "/images/Layer_x0020_1.svg",
                  name: "Arbitrum",
               },
               {
                  icon: "/images/image 183.svg",
                  name: "Binance Smart Chain",
               },
            ],
         },
      ],
      input: [
         {
            titleI: "$SWHALE you receive",
            iconI: "/images/Frame 59730.svg",
            placeholderI: "0",
         },
         {
            titleI: "USDT you pay",
            iconI: "/images/Group 1171275115.svg",
            placeholderI: "0",
         },
      ],
   },
   {
      variant: "primary",
      buttonName: "Listing at Exchanges ",
      icons: "/images/icons8-flag-24.png",
      network: [
         {
            title: "Select network",
            items: [
               {
                  icon: "/images/ETH.svg",
                  name: "Ethereum",
               },
               {
                  icon: "/images/image 183.svg",
                  name: "Binance Smart Chain",
               },
               {
                  icon: "/images/Layer_x0020_1.svg",
                  name: "Arbitrum",
               },
            ],
         },
      ],
      input: [
         {
            titleI: "USDT you pay",
            iconI: "/images/Group 1171275115.svg",
            placeholderI: "0",
         },
         {
            titleI: "$SWHALE you receive",
            iconI: "/images/Frame 59730.svg",
            placeholderI: "0",
         },
      ],
   },
];

function Pricing() {
   const [tab, setTab] = React.useState(0);

   return (
      <section>
         <div className="container mb-40">
            <h2 className="text-7xl font-semibold text-linear bg-header-title text-center mb-4">
               Buy $SWHALE token
            </h2>
            <p className="text-3xl text-center mb-20">
               Invest into the new standart of on-chain trading
            </p>
            <div className="max-w-[965px] mx-auto bg-[#BD9EFF]/15 rounded-[20px] py-[70px] px-[60px]">
               <h3 className="text-center text-6xl mb-10">
                  Buy in before price increases!
               </h3>
               <div className="grid grid-cols-5 gap-1 mb-10">
                  {packageList.map(({buttonName, amount, variant}, index) => (
                     <PackageDetails
                        key={index}
                        buttonName={buttonName}
                        amount={amount}
                        variant={variant}
                        isActive={tab === index}
                        handelClick={() => setTab(index)}
                     />
                  ))}
               </div>
               <div className="mb-10">
                  {packageList[tab].network?.map(({title, items}, index) => (
                     <div key={index}>
                        <h3 className="text-xs mb-2.5">{title}</h3>
                        <button className="flex gap-2.5 w-full">
                           {items.map(({icon, name}, index) => (
                              <div
                                 key={index}
                                 className="flex items-center justify-center gap-2.5 bg-slate-700/40 rounded-[10px] p-2.5 w-full"
                              >
                                 <img src={icon} alt="" />
                                 <p className="text-md font-medium">{name}</p>
                              </div>
                           ))}
                        </button>
                     </div>
                  ))}
               </div>
               <div className="flex gap-5 mb-[60px]">
                  {packageList[tab].input?.map(
                     ({titleI, iconI, placeholderI}, index) => (
                        <div key={index} className="w-full">
                           <h3 className="text-xs mb-2.5">{titleI}</h3>
                           <div className="flex items-center gap-2.5 bg-slate-500/50 rounded-[10px] p-2.5">
                              <input
                                 type="number"
                                 placeholder={placeholderI}
                                 className="w-full bg-transparent outline-none"
                              />
                              <img className="w-6 h-6" src={iconI} alt="" />
                           </div>
                        </div>
                     )
                  )}
               </div>
               <div className="flex justify-center">
                  <Button
                     href="/"
                     icon="/images/Mask group.svg"
                     children="Buy now"
                     variant="large"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Pricing;
