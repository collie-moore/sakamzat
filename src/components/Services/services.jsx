import React from "react";
import Flowers_Export from "./FlowersExport"
import Fruit_Export from "./FruitExport"
import Dates_Import from "./DatesImport"
import Apple_Import from "./AppleImport"


export default function Services() {
  return (
    <div className="Home">
      <Flowers_Export/>
      <Fruit_Export/>
      <Dates_Import/>
      <Apple_Import/>
    </div>
  );
}