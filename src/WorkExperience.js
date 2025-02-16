import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
    return (
        <div className="work-experience">
            <h2>WORK EXPERIENCE</h2>
            <div className="edu-timeline">
                <div className="job">
                    <div className="date">Sep 2023 - Present</div>
                    <div className="details">
                        <h3>Senior Software Engineer</h3>
                        <h4>D4 Insight</h4>
                        <ul>
                            <li>Currently working on-site at Emirates NBD Bank, Dubai</li>
                            <li>
                                Built EAM-X platform for external asset managers using Go, Node.js, TypeScript, React.js, MongoDB, Oracle DB, Redis, and Kafka
                            </li>
                            <li>
                                The EAM-X platform enables external asset managers to manage their assets and execute trades on behalf of their clients.
                            </li>
                            <li>
                                It provides EAMs with access to client portfolios, including recent transactions and holdings, with all data updated as of the previous day (T-1).
                            </li>
                            <li>
                                The EAM-X platform allows External Asset Managers (EAMs) to place bulk trades for bonds, mutual funds, and local equities in the UAE.
                            </li>
                            <li>
                                Future development will include support for bulk trades in global equities.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="job">
                    <div className="date">May 2022 - Aug 2023</div>
                    <div className="details">
                        <h3>Sr. System Analyst</h3>
                        <h4>ValueLabs</h4>
                        <ul>
                            <li>
                                Leialink: Video calling app using AWS Chime SDK with Node.js backend, GraphQL APIs, and Flutter frontend.
                            </li>
                            <li>LeiaChat: Video calling app with ZOOM SDK.</li>
                            <li>LeiaPix: Web app for converting 2D images to MP4, LIF,
                                and GIF using existing APIs.</li>
                            <li>LeiaDream: Text-to-image app using Scalability AI with
                                Node.js backend and React.js frontend.</li>
                        </ul>
                    </div>
                </div>
                <div className="job">
                    <div className="date">Nov 2018 - May 2022</div>
                    <div className="details">
                        <h3>Senior Software Engineer</h3>
                        <h4>Jio Platforms</h4>
                        <ul>
                            <li>
                                Led the JioKisan platform, helping Indian farmers with
                                real-time insights via Node.js and React.js.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="job">
                    <div className="date">Oct 2016 - Nov 2018</div>
                    <div className="details">
                        <h3>Information Technology Analyst</h3>
                        <h4>Tata Consultancy Services</h4>
                        <ul>
                            <li>
                                I worked on many Drupal-based projects, and,
                                <br />in addition, I designed some Node JS Chatbots and integrated them into some of the Drupal-based projects.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="job">
                    <div className="date">Feb 2015 - Sep 2016</div>
                    <div className="details">
                        <h3>Senior Software Developer</h3>
                        <h4>Iksula Services Pvt.Ltd.</h4>
                        <ul>
                            <li>
                                In this company, I worked on Drupal-based projects such as BigBazzar Direct's E-Commerce project.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="job">
                    <div className="date">Aug 2013 - Feb 2015</div>
                    <div className="details">
                        <h3>Software Developer</h3>
                        <h4>Website Developer India PVT.LTD</h4>
                        <ul>
                            <li>
                                In this firm, I worked on Core PHP projects, PHP-based CMS such as WordPress and Drupal, as well as PHP-based frameworks like Magento, Joomla, and Zend.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
