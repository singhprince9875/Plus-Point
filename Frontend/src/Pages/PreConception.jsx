import React from 'react'
import CardComponent from '../Components/CardComponent';
import { Navbars } from '../Components/Navbars';

const packages = [
    { 
      title: "Pre Employment Check", 
      price: 3800,
      testsIncluded: 14,
      tests: [
        "BLOOD UREA NITROGEN, SERUM (1079H-SRL)",
        "X-RAY CHEST- PA",
        "CONSULTATION"
      ],
      moreTests: 11,
      location: "Pluse Point Mulund"
    }
  ];
  
  const PreConception = () => {
    return (
        <>
        <Navbars/>
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
  };
  
//   export default HealthPackages;
  

export default PreConception
