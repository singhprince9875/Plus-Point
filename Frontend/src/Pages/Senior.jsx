import React from 'react'
import { Navbars } from '../Components/Navbars'
import CardComponent from '../Components/CardComponent'

const packages = [
    { title: "Senior Citizen Health Package", price: 4800, testsIncluded: 14, tests: ["BONE DENSITY TEST", "VITAMIN B12", "KIDNEY FUNCTION TEST"], moreTests: 11, location: "Plus Point Pune" },
]

function Senior() {
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

export default Senior