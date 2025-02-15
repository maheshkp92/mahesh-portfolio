import React from "react";

const languages = ["English", "Marathi", "Hindi"];

const Languages = () => {
    return (
        <div className="language-container">
            <h2>Languages</h2>
            <ul className="language-list">
                {languages.map((lang) => (
                    <li key={lang} className="language-item">{lang}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;
