import React from "react";
import Header from "./home/Header";
import GetEarly from "./home/GetEarly";
import Pricing from "./home/Pricing";

function page() {
   return (
      <main className="pb-5">
         <Header />
         <GetEarly />
         <Pricing />
      </main>
   );
}

export default page;
