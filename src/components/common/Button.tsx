import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "small" | "large";
   href: string;
}

function Button(props: ButtonProps) {
   const {variant, href, children, ...rest} = props;

   const Comp = href ? Link : "button";

   return (
      // @ts-ignore
      <Comp {...(href ? {href} : {})} {...rest}>
         {children}
      </Comp>
   );
}

export default Button;
