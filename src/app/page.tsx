import React from "react";
import Header from "./home/Header";
import GetEarly from "./home/GetEarly";
import Pricing from "./home/pricing/Pricing";
import Roadmap from "./home/Roadmap";
import Tokenomics from "./home/Tokenomics";
import Utilities from "./home/Utilities";

function HomePage() {
   return (
      <main className="pb-5">
         <Header />
         <GetEarly />
         <Pricing />
         <Roadmap />
         <Tokenomics />
         <Utilities />
      </main>
   );
}

export default HomePage;
