import React from "react";
import Header from "./home/Header";
import GetEarly from "./home/GetEarly";
import Pricing from "./home/pricing/Pricing";
import Roadmap from "./home/Roadmap";
import Tokenomics from "./home/Tokenomics";
import Utilities from "./home/Utilities";
import BrandGroup from "./home/BrandGroup";

function HomePage() {
   return (
      <main>
         <Header />
         <GetEarly />
         <Pricing />
         <Roadmap />
         <Tokenomics />
         <Utilities />
         <BrandGroup />
      </main>
   );
}

export default HomePage;
