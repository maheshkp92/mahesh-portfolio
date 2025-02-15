import React from "react";

const KeySkills = () => {
    return (
        <>
            <h2>Key Skills</h2>
            <div className="skills">
                {["Node.js", "React.js", "Express.JS", "Next.JS", "Golang", "TypeScript", "MySQL", "GraphQL", "PostgreSQL", "Kafka", "Redis"].map(skill => (
                    <span className="skill" key={skill}>{skill}</span>
                ))}
            </div>
        </>
    );
};

export default KeySkills;
