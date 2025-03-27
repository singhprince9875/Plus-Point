import React from 'react'
import { Navbars } from '../Components/Navbars'
import CardComponent from '../Components/CardComponent'

const packages = [
    { title: "Comprehensive Heart Checkup", price: 6000, testsIncluded: 20, tests: ["ECG", "2D ECHO", "LIPID PROFILE"], moreTests: 17, location: "Plus Point Chennai" },
]

function Heart() {
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

export default Heart