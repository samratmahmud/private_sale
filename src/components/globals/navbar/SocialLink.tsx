/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface SocialLinkProps {
   color?: "white" | "gray";
}

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

function SocialLink(prop: SocialLinkProps) {
   const {color = "white"} = prop;

   return (
      <div className="flex gap-4">
         {socialSite.map(({icon, url}, index) => (
            <Link
               href={url}
               key={index}
               target="_blank"
               className={`w-6 aspect-square p-1 rounded-full flex items-center justify-center ${
                  color === "white" ? "bg-white" : "bg-gray-700"
               }`}
            >
               <img className="w-full" src={icon} alt="" />
            </Link>
         ))}
      </div>
   );
}

export default SocialLink;
