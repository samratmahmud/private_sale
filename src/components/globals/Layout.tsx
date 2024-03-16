import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
   children?: ReactNode;
}

function Layout({children}: LayoutProps) {
   return (
      <main className="bg-gray-950">
         <Navbar />
         {children}
         {/* <Footer /> */}
      </main>
   );
}

export default Layout;
