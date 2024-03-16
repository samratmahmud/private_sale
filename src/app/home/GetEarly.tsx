/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/common/Button";
import React from "react";

function GetEarly() {
   return (
      <section className="bg-indigo-400/30">
         <div className="container">
            <div className="grid grid-cols-10 gap-20 max-w-[1240px] mx-auto">
               <div className="col-span-6"></div>
               <div className="col-span-4">
                  <h2 className="text-7xl font-semibold text-linear bg-header-title mb-4">
                     SmartWhales brings a new standard of on-chain trading{" "}
                  </h2>
                  <p className="mb-12">
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
