import React from "react";
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="project">
        <a href="https://github.com/JoseG777/AITAH-Story-Generator" target="_blank" rel="noopener noreferrer"><h2>Trending Stories Generator</h2></a>
        <ul>
          <li><strong>About:</strong> This project was really fun but also challenging. It was my first time using all these technologies so I had a lot of trouble getting the hang of it, but ultimately I think I did pretty good. The project is pretty simple and I did it in the span of 4 days, but it was a really good learning experience and I'm definitely going to implement these technologies into a future project</li>
          <li>
            <h3>Tech Stack: Python</h3>
            <ul>
              <li>Developed a terminal-based application to fetch trending r/AITAH subreddit stories using Tavily’s API and generate new, unique stories using OpenAI.</li>
              <li>Implemented a multi-agent system (Search Agent, Creation Agent, Validation Agent) to automate story creation, ensuring coherence and quality with OpenAI.</li>
              <li>Integrated Langchain for advanced workflow management, facilitating seamless interaction between agents and efficient processing of tasks.</li>
              <li>Utilized GitHub automation to ensure proper styling and adherence to PEP8 standards, creating clean and readable code.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <a href="https://github.com/JoseG777/VacaQuest" target="_blank" rel="noopener noreferrer"><h2>VacaQuest</h2></a>
        <ul>
          <li><strong>About:</strong> This is the first project I worked on as apart of the SEO Tech Developers Program. I know what you're thinking: Isn't this just a copy of the Travel Itinerary Generator project? And to that, I say yes. Over the span of 4 days, my partner and I worked on this project and presented to ~40 people. This project was a good intro to writing code in Python and SQL.</li>
          <li>
            <h3> Tech Stack: Python, Flask, SQL </h3>
            <ul>
            <li>Allowed users to sign up and log in, securely storing their passwords in the database using hashing.</li>
            <li>Enabled users to input personal information and travel preferences, which were sent to OpenAI to tailor personalized travel itineraries.</li>
            <li>Implemented functionality for users to create, save, and delete their travel itineraries, with all data managed in a SQL database.</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="project">
        <a href="https://devpost.com/software/pillpal-airu2d" target="_blank" rel="noopener noreferrer"><h2>PillPal</h2></a>
        <ul>
          <li><strong>About:</strong> This project was a pain! My team and I worked on this over the span of ~36 hours and the hardest part about it was setting up everything needed for React Native and the constant discrepencies between our versions. But overall I had a lot of fun doing it. We were all proud of what we were able to accomplish and we even ended up winning best use of Google Cloud!</li>
          <li>
            <h3> Tech Stack: MongoDB, Express.js, React Native, Node.js </h3>
            <ul>
              <li>Developed a track-winning app at SBUHacks for better medication management through AI-driven prescription analysis, leveraging Google Cloud technologies, catering especially to non-English speakers and the elderly.</li>
              <li>Implemented a Google Cloud Vision API-based image upload to decipher prescription labels, providing users with personalized medication guidance, dosage instructions, and safety warnings.</li>
              <li>Ensured efficient API communication using Node.js and Express.js for real-time access to medication information and user-specific recommendations.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <a href="https://yugioh-saver.web.app/" target="_blank" rel="noopener noreferrer"><h2>Virtual Card Saver</h2></a>
        <ul>
          <li><strong>About:</strong> This project is still in development! I really like Yu-Gi-Oh so I thought this would be a fun idea when I learned about the Yu-Gi-Oh API used in this project. There are still a handful of features I want to add and I hope to complete it by the end of August. This project made me realize the importance of designing scalable and optimal database schemas as going back to change stuff can be a headache, and that I prefer Vue over React.</li>
          <li>
            <h3> Tech Stack: MongoDB, Express.js, Vue.js, Node.js </h3>
            <ul>
              <li>Developed a virtual card saver application for Yu-Gi-Oh! enthusiasts, enabling secure management and sharing of card decks, with user authentication powered by Firebase.</li>
              <li>Implemented MongoDB for robust data management, designed schemas to efficiently handle extensive card and user data, and integrated a secure API for real-time retrieval and display of card images.</li>
              <li>Created and maintained RESTful API endpoints using Express.js to support complex user interactions like deck building and profile management.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project">
        <a href="https://codefest-97b85.web.app/" target="_blank" rel="noopener noreferrer"><h2>Travel Itinerary Generator</h2></a>
        <ul>
          <li><strong>About:</strong> This was the first project I ever worked on using React and Firebase. It was a great learning experience. My team and I worked on this over the span of a month and presented it in front of ~40 people. I learned a lot about what to do and not do when working in a team from this experience. We all worked on the same branch for a majority of the project which led to a lot of issues, but ultimately we were happy with the outcome!</li>
          <li>
            <h3> Tech Stack: Firebase, Express.js, React.js, Node.js </h3>
            <ul>
              <li>Developed a travel itinerary web app integrating Google Gemini AI and Amadeus API for personalized trip planning and flight estimates.</li>
              <li>Enhanced user experience by allowing vacation discovery, custom itinerary generation, and direct PDF saving to Firebase accounts.</li>
              <li>Secured API interactions through a dedicated backend service, implementing robust security measures to protect sensitive data and API keys, utilizing Express.js and Firebase for data management.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
