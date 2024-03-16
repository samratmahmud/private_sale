/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import React from "react";
import Timeline from "./Timeline";

const brandLogo = [
   "/images/optimism-ethereum-op-logo 1.png",
   "/images/Layer_x0020_1.png",
   "/images/bnb-chain-binance-smart-chain-logo 1.png",
   "/images/oasis-network-rose-logo 1.png",
   "/images/ETH.png",
];

function Header() {
   return (
      <section>
         <div className="container mt-[100px] mb-[60px]">
            <h1 className="max-w-[828px] mx-auto text-8xl font-semibold text-center mb-4 text-linear bg-header-title">
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
            <div className="flex justify-center mb-12">
               <Button
                  color="white"
                  href="/"
                  icon="/images/Mask group.svg"
                  children="Buy Token"
                  variant="large"
               />
            </div>
            <div>
               <Timeline />
            </div>
         </div>
      </section>
   );
}

export default Header;
