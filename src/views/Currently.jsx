import React from "react";
import '../styles/Currently.css';

function Currently() {
  return (
    <div className="currently-container">
    <h1>What am I currently working on?</h1>

      <div className="block">
        <h2>Data Intern at Lenox Hill Neighborhood House</h2>
        <ul>
          <li>Developing Python scripts to automate the extraction of data from PDFs and transfer it into Excel, significantly reducing manual data entry time.</li>
          <li>Performing data cleaning and ensuring the accuracy and integrity of data within Excel spreadsheets.</li>
          <li>Supporting the Data, Evaluation, and Performance Management department by improving data processing workflows and enhancing data quality.</li>
        </ul>
      </div>
    
      <div className="block">
        <h2> Data Structures and Algorithms </h2>
        <p> I am currently practicing and improving my skills in data structures and algorithms. I focus on solving a variety of problems to strengthen my understanding and enhance my problem-solving abilities. </p>
      </div>
      
      <div className="block">
        <h2>Code Review and Improvement</h2>
        <p>I am currently going through my old code to try to make it more readable and user-friendly.</p>
      </div>
  
  </div>

  );
}

export default Currently;
