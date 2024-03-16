/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/common/Button";
import React from "react";

function GetEarly() {
   return (
      <section>
         <div className="container mb-[120px]">
            <div className="grid grid-cols-10 items-center gap-20 max-w-[1240px] mx-auto">
               <div className="col-span-6 py-2.5 pr-16 pl-8 bg-gray-black rounded-xl flex items-center gap-20 justify-between">
                  <div>
                     <div className="mb-5">
                        <img src="/images/Logo.svg" alt="" />
                     </div>
                     <p className="text-7xl text-primary-600 font-semibold mb-2.5">
                        Get early
                     </p>
                     <p className="text-9xl font-semibold text-linear bg-header-title">
                        Access
                     </p>
                  </div>
                  <div>
                     <img src="/images/Group 1171275109.png" alt="" />
                  </div>
               </div>
               <div className="col-span-4">
                  <h2 className="text-7xl font-semibold text-linear bg-header-title mb-4">
                     SmartWhales brings a new standard of on-chain trading{" "}
                  </h2>
                  <p className="mb-12 leading-[1.67em]">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since.
                  </p>
                  <div className="flex">
                     <Button
                        href="/"
                        children="Read more"
                        variant="small"
                        iconR="/images/Group 1171275114.png"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default GetEarly;
