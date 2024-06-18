// src/pages/Hero.tsx
import React from 'react';
import '../Hero.css';

function Hero() {
  return (
    <>
      <div className="nav">
        <h1>Company Name</h1>
      </div>
      
      <body>
          <div className="top">
              <h1>Pay Portal</h1>
              <h2>Your employee pay and profile, simplified.</h2>
              <p>Enter the company hiring process. Complete your profile in minutes and access everything you need from day one.</p>
              <div className="profile">
                <h2>Create Your Profile</h2>
                <p>Select your role and employment details to begin</p>
                <div className="Employeedetails">
                <h3>Job Position</h3>
                <h3>Department</h3>
                <h3>Job Level</h3>
                <h3>Region/Location</h3>
                <button className="onboarding-btn">Continue Onboarding</button>
              </div>
              </div>
              <div className="end">
                <p>Demo experience – not affiliated with any real company.

This is a simulated onboarding portal for demonstration purposes only.</p>
              </div>
              

          </div>
      </body>
    </>
    
  );
}

export default Hero;
