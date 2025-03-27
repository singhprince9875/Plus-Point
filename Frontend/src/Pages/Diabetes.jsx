import React from 'react'
import { Navbars } from '../Components/Navbars'
import CardComponent from '../Components/CardComponent'


const packages =[
    { title: "Diabetes Management Check", price: 3500, testsIncluded: 10, tests: ["HBA1C", "FASTING BLOOD SUGAR", "KIDNEY FUNCTION TEST"], moreTests: 7, location: "Plus Point Jaipur" }
]
function Diabetes() {
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
  )
}

export default Diabetes