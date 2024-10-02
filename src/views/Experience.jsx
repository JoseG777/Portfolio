import React from "react";
import '../styles/Projects.css';

function Experience() {
  return (
    <div className="projects-container">
      <h1>Experience</h1>

      <div className="project">
        <h2>Software Engineering Intern</h2>
        <p className="company-duration"><strong>Company:</strong> Lenox Hill Neighborhood House, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Aug 2024 - Present</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Automated district data extraction for patrons using Python, Selenium, and multiprocessing, reducing data collection time by over 90%.</li>
              <li>Developed Python scripts to extract meal data from PDFs into Excel, improving data accuracy and reducing task time by 95%.</li>
              <li>Enhanced sponsor report quality by improving data cleaning and input techniques using Excel.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Lifeguard</h2>
        <p className="company-duration"><strong>Company:</strong> Lenox Hill Neighborhood House, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Dec 2022 - Present</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Monitored pool activities to ensure patron safety, promptly addressing hazards and enforcing rules.</li>
              <li>Maintained pool deck cleanliness and order, fostering a safe and welcoming environment.</li>
              <li>Regularly checked chemical levels to comply with health standards and ensure pool safety.</li>
              <li>Interacted with patrons to provide assistance, answer questions, and resolve concerns, promoting a positive community atmosphere.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Full-Stack Web Developer Intern</h2>
        <p className="company-duration"><strong>Company:</strong> SEO Tech Developer, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> May 2024 - Aug 2024</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Participated in an intensive 6-week SEO Tech Dev Program, focusing on full-stack development, security best practices, and unit testing.</li>
              <li>Developed web applications using Python, Flask, and SQL in an Agile environment, collaborating on multiple projects and presenting to large audiences.</li>
              <li>Enhanced problem-solving skills through practice with data structures and algorithms, improving coding efficiency and scalability.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Full-Stack Web Developer Intern</h2>
        <p className="company-duration"><strong>Company:</strong> MNC Development, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Feb 2024 - May 2024</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Designed and optimized a React-based front-end for an urban culture media site, integrating Firebase to streamline media uploads and management.</li>
              <li>Developed advanced search functionality using MongoDB, addressing Firestore’s query limitations by utilizing indexing features.</li>
              <li>Enhanced web application performance and accessibility by over 50%, using Google Lighthouse for diagnostics and improvements.</li>
              <li>Participated in Agile/Scrum development cycles, managed tasks using GitHub, and engaged in weekly sprints and deployments.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <h2>Lifeguard / Swim Instructor</h2>
        <p className="company-duration"><strong>Company:</strong> YMCA, New York, NY</p>
        <p className="company-duration"><strong>Duration:</strong> Dec 2021 - Sep 2023</p>
        <ul>
          <li><h3>Responsibilities:</h3>
            <ul>
              <li>Conducted swim lessons for individuals aged 3 to 80, focusing on skill development, safety, and progress.</li>
              <li>Ensured safety in a high-traffic pool environment by overseeing swim activities and performing routine safety checks.</li>
              <li>Maintained pool chemical balance and water quality, adhering to health and safety standards.</li>
              <li>Tracked student progress and awarded certificates, recognizing milestones throughout the season.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
