// src/pages/Hero.tsx
import React, { useState } from 'react';
import '../Hero.css';

function Hero() {
  // state = what the user selected
  const [jobPosition, setJobPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [jobLevel, setJobLevel] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <div className="nav">
        <h1>Company Name</h1>
      </div>
      <main className="top">
        <h1>Pay Portal</h1>
        <h2>Your employee pay and profile, simplified.</h2>
        <p>
          Enter the company hiring process. Complete your profile in minutes and
          access everything you need from day one.
        </p>

        <div className="profile">
          <h2>Create Your Profile</h2>
          <p>Select your role and employment details to begin</p>

          <div className="Employeedetails">
            {/* Job Position dropdown */}
            <label className="field">
              <span>Job Position</span>
              <select
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              >
                <option value="">Select a position</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Data Analyst">Data Analyst</option>
              </select>
            </label>

            {/* Department dropdown */}
            <label className="field">
              <span>Department</span>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select a department</option>
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Quality">Quality</option>
                <option value="Operations">Operations</option>
              </select>
            </label>

            {/* Job Level dropdown */}
            <label className="field">
              <span>Job Level</span>
              <select
                value={jobLevel}
                onChange={(e) => setJobLevel(e.target.value)}
              >
                <option value="">Select a level</option>
                <option value="Intern">Intern</option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </select>
            </label>

            {/* Region dropdown */}
            <label className="field">
              <span>Region/Location</span>
              <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Select a region</option>
                <option value="AMR - United States">AMR - United States</option>
                <option value="EMEA - UK">EMEA - UK</option>
                <option value="APAC - Japan">APAC - Japan</option>
              </select>
            </label>

            <button className="onboarding-btn" disabled={!jobPosition || !department || !jobLevel || !region}>
              Continue Onboarding
            </button>
          </div>
        </div>
        <div className="end">
            <h2>Project Built With</h2>
            <div className="pics">

            </div>
            <h2>Micheal Egboh</h2>
        </div>
        <div className="footer">
          <p>
            Demo experience – not affiliated with any real company.
            <br />
            This is a simulated onboarding portal for demonstration purposes only.
          </p>
        </div>
      </main>
    </>
  );
}

export default Hero;
