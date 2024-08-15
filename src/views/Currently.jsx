import React from "react";
import '../styles/Currently.css';

function Currently() {
  return (
    <div className="currently-container">
    <h1>What am I currently working on?</h1>
    
      <div className="block">
        <h2> Data Structures and Algorithms </h2>
        <p> I am currently practicing and improving my skills in data structures and algorithms. I focus on solving a variety of problems to strengthen my understanding and enhance my problem-solving abilities. </p>
        <p><i>Last update: August 15th, 2024</i></p>
      </div>
      
      <div className="block">
        <h2>Code Review and Improvement</h2>
        <p>I am currently going through my old code to try to make it more readable and user-friendly.</p>
        <p><i>Last update: August 1st, 2024</i></p>
      </div>
  </div>

  );
}

export default Currently;
