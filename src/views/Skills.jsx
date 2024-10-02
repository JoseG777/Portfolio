import React from "react";
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="skills-grid">
        <div className="skills-section">
          <h2>Languages</h2>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Frameworks</h2>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Flask</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Tools</h2>
          <ul>
            <li>AWS</li>
            <li>Git/GitHub</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Google Lighthouse</li>
            <li>Microsoft Excel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
