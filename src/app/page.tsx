import React from "react";
import Header from "./home/Header";
import GetEarly from "./home/GetEarly";
import Pricing from "./home/pricing/Pricing";
import Roadmap from "./home/Roadmap";

function HomePage() {
   return (
      <main className="pb-5">
         <Header />
         <GetEarly />
         <Pricing />
         <Roadmap />
      </main>
   );
}

export default HomePage;
