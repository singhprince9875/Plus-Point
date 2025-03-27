import React from 'react'
import { Navbars } from '../Components/Navbars'
import CardComponent from '../Components/CardComponent'

const packages = [
    { title: "Special Executive Checkup", price: 8900, testsIncluded: 25, tests: ["STRESS ECHO", "LUNG FUNCTION TEST", "MRI BRAIN"], moreTests: 22, location: "Plus Point Kolkata" },
]

function Special() {
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

export default Special