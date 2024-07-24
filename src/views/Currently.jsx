import React from "react";
import '../styles/Currently.css';

function Currently() {
  return (
    <div className="currently-container">
    <h1>What am I currently working on?</h1>
    
      <div className="block">
        <h2>SEO Tech Developer Program</h2>
        <p>I am currently participating in the SEO Tech Developer Program</p>
        <p>
          The program provides comprehensive training and mentoring in a variety of topics. We cover a variety of topics, including APIs, JSON, Databases, SQL, Unit Testing, Development Pipelines, Cyber Security, Data Engineering, Front End Technologies, Web App Security, UI/UX Design, Agile and Scrum, DevOps, and Cloud Engineering.
        </p>
        <p><i>Last update: June 26th, 2024</i></p>
      </div>
      
      <div className="block">
        <h2>Code Review and Improvement</h2>
        <p>I am currently going through my old code to try to make it more readable and user-friendly.</p>
      </div>
  </div>

  );
}

export default Currently;
