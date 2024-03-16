/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "small" | "large";
   color?: "primary" | "white";
   href: string;
   icon?: string;
}

function Button(props: ButtonProps) {
   const {
      variant = "large",
      href,
      children,
      color = "primary",
      icon,
      ...rest
   } = props;

   const Comp = href ? Link : "button";

   return (
      // @ts-ignore
      <Comp
         {...(href ? {href} : {})}
         {...rest}
         className={`flex items-center gap-2.5 hover:no-underline duration-300 rounded-full ${
            variant === "large"
               ? "px-10 py-[18px] font-bold bg-white hover:bg-neutral-200 text-primary-600 uppercase shadow-md"
               : `text-base px-6 py-[13px] ${
                    color === "primary"
                       ? "bg-primary-600 hover:bg-indigo-700 text-white font-medium"
                       : "font-bold bg-white hover:bg-neutral-200 text-gray-800"
                 }`
         }`}
      >
         {icon && <img className="py-0.5" src={icon} alt="" />}
         {children}
      </Comp>
   );
}

export default Button;
