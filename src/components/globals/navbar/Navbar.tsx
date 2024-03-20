/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";
import SocialLink from "./SocialLink";

const navLink = [
   {
      name: "Home",
      path: "/",
   },
   {
      name: "About",
      path: "/",
   },
   {
      name: "Buy Token",
      path: "/",
   },
   {
      name: "Roadmap",
      path: "/",
   },
   {
      name: "Tokenomics",
      path: "/",
   },
   {
      name: "Utilities",
      path: "/",
   },
   {
      name: "Built With",
      path: "/",
   },
];

function Navbar() {
   return (
      <nav>
         <div className="container py-5">
            <div className="flex gap-3 justify-between items-center">
               <Link href="/">
                  <img src="/images/Logo.svg" alt="" />
               </Link>
               <div className="flex items-center gap-6">
                  <div>
                     <SocialLink />
                  </div>
                  <Button children="Documentation" variant="small" href="/" />
                  <Button
                     children="Connect wallet"
                     variant="small"
                     color="white"
                     icon="/images/Vector (3).svg"
                     href="/"
                  />
               </div>
            </div>
            <hr className=" border border-white/10 w-full my-5" />
            <div className="flex gap-6 items-center justify-center">
               {navLink.map(({name, path}, index) => (
                  <Link
                     href={path}
                     key={index}
                     className="font-semibold hover:text-white/70 duration-300"
                  >
                     {name}
                  </Link>
               ))}
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
