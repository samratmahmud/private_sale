/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import React from "react";

const brandLogo = [
   "/images/optimism-ethereum-op-logo 1.png",
   "/images/Layer_x0020_1.png",
   "/images/bnb-chain-binance-smart-chain-logo 1.png",
   "/images/oasis-network-rose-logo 1.png",
   "/images/ETH.png",
];

const timing = [
   {
      name: "DAYS",
      value: "05",
   },
   {
      name: "HOURS",
      value: "23",
   },
];

function Header() {
   return (
      <section>
         <div className="container mt-[100px]">
            <h1 className="max-w-[828px] mx-auto text-8xl font-semibold text-center mb-4">
               Copy-trade most successful crypto whales.
            </h1>
            <p className="text-white text-center leading-[1.67em] mb-12">
               Invest together with Binance Labs, Pantera Capital,  and a16z.
            </p>
            <div className="flex gap-[30px] justify-center mb-12">
               {brandLogo.map((logo, index) => (
                  <img key={index} src={logo} alt="" />
               ))}
            </div>
            <div className="flex justify-center">
               <Button
                  color="white"
                  href="/"
                  icon="/images/Mask group.svg"
                  children="Buy Token"
                  variant="large"
               />
            </div>
            <div className="flex gap-4">
               {timing.map(({name, value}, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center gap-[18px]"
                  >
                     <h3 className="text-md font-bold text-neutral-200">
                        {name}
                     </h3>
                     <p className="text-8xl font-bold">{value}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Header;
