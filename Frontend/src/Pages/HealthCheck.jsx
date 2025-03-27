import React from "react";
import HealthCheckCompo from "../Components/HealthCheckCompo";
import { Navbars } from "../Components/Navbars";

const packages = [
    { title: "Recommended", price: 4350 },
    { title: "Pre-Conception", price: 3800 },
    { title: "Cancer Screening", price: 799 },
    { title: "Diabetes", price: 999 },
    { title: "General Health", price: 786 },
    { title: "Heart", price: 300 },
    { title: "Senior Citizen", price: 3500 },
    { title: "Special", price: 2 },
    { title: "Women", price: 1800 },
  ];

const HealthCheck = () => {
    return (
        <>
        <Navbars/>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', cursor:'pointer'}}>
        {packages.map((pkg, index) => (
          <HealthCheckCompo key={index} name={pkg.title} price={pkg.price} />
        ))}
      </div>
      </>
    );
  };
  
  export default HealthCheck;