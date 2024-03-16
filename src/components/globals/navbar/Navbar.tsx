/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const socialSite = [
   {
      icon: "/images/Group 1171275108.svg",
      url: "https://twitter.com/",
   },
   {
      icon: "/images/Vector.svg",
      url: "/",
   },
   {
      icon: "/images/Discordlogo.svg",
      url: "/",
   },
   {
      icon: "/images/Discordlogo.svg",
      url: "/",
   },
   {
      icon: "/images/Vector (1).svg",
      url: "/",
   },
];

function Navbar() {
   return (
      <nav>
         <div className="container">
            <div className="flex gap-3 justify-between items-center">
               <Link href="/">
                  <img src="/images/Logo.svg" alt="" />
               </Link>
               <div>
                  <div className="flex gap-4">
                     {socialSite.map(({icon, url}, index) => (
                        <Link
                           href={url}
                           key={index}
                           target="_blank"
                           className="w-6 aspect-square p-1 bg-white rounded-full flex items-center justify-center"
                        >
                           <img className="w-full" src={icon} alt="" />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
