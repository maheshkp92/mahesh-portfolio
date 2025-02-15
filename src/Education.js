import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <div className="education">
            <h2>EDUCATION</h2>
            <div className="timeline">
                {/* Bachelor's Degree */}
                <div className="edu-item">
                    <div className="year">2013</div>
                    <div className="details">
                        <h3>B.Tech/B.E.</h3>
                        <h4>The Vidyavirdhini College of Engineering, Thane</h4>
                    </div>
                </div>

                {/* 12th Grade */}
                <div className="edu-item">
                    <div className="year">2009</div>
                    <div className="details">
                        <h3>XIIth</h3>
                        <h4>English</h4>
                    </div>
                </div>

                {/* 10th Grade */}
                <div className="edu-item">
                    <div className="year">2007</div>
                    <div className="details">
                        <h3>Xth</h3>
                        <h4>Marathi</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
