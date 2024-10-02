import React from "react";
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to My Portfolio!</h1>
      <h2>Hi, I'm Jose Guzman</h2>
      <p>
        I’m a junior at Hunter College, majoring in Computer Science. Honestly, I kind of just chose CS on a whim (and because of the money), but it ended up being something I really enjoy. The more I learn, the more I realized how much I can actually do with code. I love the challenge of figuring things out and the feeling of finally solving a problem after banging my head against it for a while.
      </p>
      <p>
        I’m always working on personal projects to push myself and learn new things/ improve on the skills I currently have. I’ve had my fair share of failures along the way, but I try to see them as part of the process as each one teaches me something new and helps me get better.
      </p>
      <p>
        When I’m not coding, I love to swim and read. Right now, I’m reading <em>Pedro Páramo</em> by Juan Rulfo—mostly to brush up on my Spanish.
      </p>
    </div>
  );
}

export default HomePage;
