import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Recommended Full Body Checkup",
    price: 5000,
    testsIncluded: 18,
    tests: ["CBC, BLOOD", "LIVER FUNCTION TEST", "KIDNEY FUNCTION TEST"],
    moreTests: 15,
    location: "Plus Point Mumbai",
  },
];
function GeneralHealth() {
  return (
    <>
      <Navbars />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', gap: '20px' }}>
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

export default GeneralHealth;