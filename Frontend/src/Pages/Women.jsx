import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Women’s Health Check Advanced",
    price: 5800,
    testsIncluded: 16,
    tests: ["PAP SMEAR", "MAMMOGRAPHY", "VITAMIN D TEST"],
    moreTests: 13,
    location: "Plus Point Hyderabad",
  },
];

function Women() {
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

export default Women;