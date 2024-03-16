import React from "react";
import Header from "./home/Header";
import GetEarly from "./home/GetEarly";
import Pricing from "./home/pricing/Pricing";

function HomePage() {
   return (
      <main className="pb-5">
         <Header />
         <GetEarly />
         <Pricing />
      </main>
   );
}

export default HomePage;
