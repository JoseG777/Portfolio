import React from "react";
import '../styles/Currently.css';

function Currently() {
  return (
    <div className="currently-container">
      <h1>What am I currently working on?</h1>

      <div className="block">
        <h2>Software Engineering Intern at Lenox Hill Neighborhood House</h2>
        <ul>
          <li>Automating district data extraction using Python, Selenium, and multiprocessing, reducing data collection time by over 90%.</li>
          <li>Developing Python scripts to extract meal data from PDFs into Excel, improving data accuracy and cutting manual task time by 95%.</li>
          <li>Improving sponsor reports by streamlining data cleaning processes in Excel, enhancing overall data quality and workflow efficiency.</li>
        </ul>
      </div>

      <div className="block">
        <h2>Task Manager Project</h2>
        <p>I'm currently working on a task manager project to enhance my skills with AWS services and create a useful tool for myself. The project allows users to:</p>
        <ul>
          <li>Create an account and log in to manage their tasks.</li>
          <li>Add and track tasks with customizable intervals for email reminders to help stay on top of them.</li>
          <li>Utilize AWS services for hosting, user authentication, and email notifications to improve scalability and functionality.</li>
        </ul>
        <p>This project is also a stepping stone for a more ambitous project I want to pursue.</p>
      </div>
    
      <div className="block">
        <h2>Data Structures and Algorithms</h2>
        <p>I am currently practicing and improving my skills in data structures and algorithms. I focus on solving a variety of problems to strengthen my understanding and enhance my problem-solving abilities.</p>
      </div>
      
      <div className="block">
        <h2>Code Review and Improvement</h2>
        <p>I am currently going through my old code to improve readability and user-friendliness.</p>
      </div>
    </div>
  );
}

export default Currently;
