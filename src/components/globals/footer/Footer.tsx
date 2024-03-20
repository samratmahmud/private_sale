/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import SocialLink from "../navbar/SocialLink";

function Footer() {
   return (
      <section>
         <div className="container py-5">
            <div className="flex gap-4 items-center justify-between">
               <Link href="/">
                  <img src="/images/Logo.svg" alt="" />
               </Link>
               <div>
                  <SocialLink color="gray" />
               </div>
               <div className="text-xs leading-[1.834em]">
                  @2023 smartwhales.ai All right reserved.
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;
