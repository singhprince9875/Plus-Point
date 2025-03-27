import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Cancer Screening Advanced",
    price: 7500,
    testsIncluded: 22,
    tests: [
      "CEA (Carcinoembryonic Antigen)",
      "PSA (Prostate-Specific Antigen)",
      "Mammography",
    ],
    moreTests: 19,
    location: "Plus Point Bangalore",
  },
];
function Cancer() {
  return (
    <>
      <Navbars />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "1rem",
          gap: "20px",
        }}
      >
        {packages.map((pkg, index) => (
          <CardComponent
            key={index}
            name={pkg.title}
            price={pkg.price}
            testsIncluded={pkg.testsIncluded}
            tests={pkg.tests.slice(0, 3)}
            moreTests={pkg.moreTests}
            location={pkg.location}
          />
        ))}
      </div>
    </>
  );
}

export default Cancer;