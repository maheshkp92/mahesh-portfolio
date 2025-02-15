import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="section profile-section">
          <img className="profile-img" src="/profile.jpg" alt="Profile" />
        </div>
        <div className="section">
          <PersonalInfo />
        </div>
        <div className="section">
          <h2>Key Skills</h2>
          <div className="skills">
            {["Node.js", "React.js", "Golang", "TypeScript", "MySQL", "GraphQL", "PostgreSQL", "Kafka", "Redis"].map(skill => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="section">
          <h2>Other Personal Details</h2>
          <p><strong>City</strong> Dubai</p>
          <p><strong>Country</strong> United Arab Emirates (UAE)</p>
        </div>
        <div className="section">
          <h2>Languages</h2>
          <ul>
            <li>English</li>
            <li>Marathi</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="section">
          <div className="card">
            <div className="name">Mahesh Patil</div>
            <div className="title">Senior Software Engineer</div>
          </div>
        </div>
        <div className="section">
          <h2>Profile Summary</h2>
          <p className="description">Experienced Node.js and React.js developer skilled in building high-performance web applications with modern JavaScript frameworks.<br /> Adept at designing RESTful APIs, developing scalable microservices, and integrating databases and third-party services.<br /> Proficient in full-stack development, ensuring seamless front-end and back-end integration with a focus on clean, maintainable code.<br />Passionate about optimizing application performance and delivering intuitive user experiences.</p>
        </div>
        <div className="section">
          <WorkExperience />
        </div>
        <div className="section">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
