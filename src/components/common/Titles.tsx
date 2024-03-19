import React from "react";

interface titlesProps {
   headLine: string;
   describtion: string;
}

function Titles(props: titlesProps) {
   const {headLine, describtion} = props;

   return (
      <div>
         <h2 className="text-7xl font-semibold text-linear bg-header-title text-center mb-4">
            {headLine}
         </h2>
         <p className="text-3xl text-center">{describtion}</p>
      </div>
   );
}

export default Titles;
