import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ResumeCard } from '../Components/Cards'

class Resume extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 id="resume-header">Resume</h1>

                </Jumbotron>
                <div>
                    <Card bg="light">
                        <Card.Body>
                            <div id="about-me">
                                <ResumeCard title="About Me" style={{ "text-align": "center" }} text={
                                    <div id="resume-about">
                                        <p style={{ fontWeight: "bold" }}>Shawn Stawiarski</p>
                                        <p>Pittsburgh, PA</p>
                                        <p>(412) 212-8518</p>
                                        <p id="resume-job-title">Software Engineering Student</p>
                                        <p id="resume-objective">Soon-to-be graduate seeking out entry-level software engineering positions in either front-end or back-end</p>
                                    </div>
                                } />
                            </div>
                            <div id="work-history">
                                <ResumeCard title="Employment History" text={
                                    <div id="resume-work-history">
                                        <p>
                                            Starbucks, Inc.
                                            <text style={{ fontStyle: "italic" }}> (2017-Present)</text>
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Job title: </text>
                                        Barista
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Duties included: </text>
                                            <ul>
                                                <li>Working in a fast-paced environment to satisfy customer demands</li>
                                                <li>Working in a team to complete goals under stressful circumstances while maintaining quality</li>
                                                <li>Maintaining conversation and pleasant demeanor while swiftly accomplishing tasks</li>
                                                <li>Handling cash in a professional manner</li>
                                            </ul>
                                        </p>

                                        <hr />

                                        <p>
                                            Gap, Inc.
                                            <text style={{ fontStyle: "italic" }}> (2015-2015)</text>
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Job title: </text>
                                        Retail Associate
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Duties included: </text>
                                            <ul>
                                                <li>Anticipating customer needs and assisting in inquiries</li>
                                                <li>Maintaining professional appearance of stock and ensuring proper inventory placement</li>
                                                <li>Minimizing theft and loss</li>
                                            </ul>
                                        </p>

                                        <hr />

                                        <p>
                                            Zoup! Fresh Soup Company, LLC
                                            <text style={{ fontStyle: "italic" }}> (2014-2014)</text>
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Job title: </text>
                                        Cashier/Customer Service
                                        </p>

                                        <p>
                                            <text style={{ fontWeight: "bold" }}>Duties included: </text>
                                            <ul>
                                                <li>Working to corporate standard to maintain consistent food quality</li>
                                                <li>Working in a team to prepare and serve food in a quick, safe, and clean manner</li>
                                                <li>Closing restaurant and preparing future shifts for success</li>
                                            </ul>
                                        </p>
                                    </div>
                                } />
                            </div>
                            <div id="education">
                                <ResumeCard title="Education History" text={
                                    <div id="resume-education-history">
                                        <p><b>Higher Education</b></p>
                                        <div id="higher-education">
                                            <p>
                                                <u><b>Arizona State University</b></u> (Tempe, AZ)
                                            <text style={{ fontStyle: "italic" }}> (2018-Present)</text>
                                            </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>Major: </text>
                                        Software Engineering
                                        </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>GPA: </text>
                                        3.62
                                        </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>Highlights: </text>
                                                <ul>
                                                    <li>Significant coursework related to <b>Java</b> (including JUnit testing, distributed systems, and GUI)</li>
                                                    <li>Some courses involving other programming languages, such as <b>C++</b>, LISP, and Prolog</li>
                                                    <li>Courses involving RDMS such as <b>MySQL</b> and their usage inside Java programs using JDBC</li>
                                                    <li>Provided experience using <b>Git</b> version control, both as an individual and as part of team collaboration</li>
                                                    <li>Strong team project foundations based on the <b>Agile</b> workflow (and including fully <u>remote</u> teamwork)</li>
                                                    <li><b>Data structures and algorithms</b>, including binary search trees, linked lists, and other algorithms</li>
                                                    <li>Self-planning and documenting projects professionally and in detail</li>
                                                </ul>
                                            </p>

                                            <hr />

                                            <p>
                                                <u><b>Western Washington University</b></u> (Bellingham, WA)
                                            <text style={{ fontStyle: "italic" }}> (2015-2017)</text>
                                            </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>Intended Major: </text>
                                        Chemistry (never declared prior to transfer)
                                        </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>GPA: </text>
                                        3.06
                                        </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>Highlights: </text>
                                                <ul>
                                                    <li>Completion of general studies courses</li>
                                                    <li>Began strong foundations in mathematics with courses such as Physics and Pre-calculus</li>
                                                    <li>Expanded worldview through anthropology, psychology, and art courses</li>
                                                    <li>Improved ability to express thoughts through writing through courses in critical writing, political theory, and theatre</li>
                                                </ul>
                                            </p>

                                            <hr />
                                        </div>
                                        <div id="high-school">
                                            <p><b>High School</b></p>
                                            <p>
                                                <u><b>Canon-McMillan High School</b></u> (Canonsburg, PA)
                                            <text style={{ fontStyle: "italic" }}> (2011-2015)</text>
                                            </p>
                                            <p>
                                                <text style={{ fontWeight: "bold" }}>GPA: </text>
                                        Unknown
                                        </p>

                                            <p>
                                                <text style={{ fontWeight: "bold" }}>Highlights: </text>
                                                <ul>
                                                    <li>Graduated with honors and as member of the National Honor Society</li>
                                                    <li>Courses mainly honors and AP</li>
                                                    <li>Active in French club as well as SEC Club (special needs student outreach)</li>
                                                    <li>SAT score of 1960 (old calculation) or 1380 (new calculation)</li>
                                                    <li>ACT score of 31 out of 36</li>
                                                </ul>
                                            </p>
                                        </div>

                                    </div>
                                } />
                            </div>
                            <div id="special-skills">
                                <ResumeCard title="Additional Skills" text={
                                    <div id="resume-skills">
                                        <div id="general-skills">
                                            <p><b>General Skills:</b></p>
                                            <p>
                                                <ul>
                                                    <li>Ability to work under pressure in a variety of evironments</li>
                                                    <li>Excellent ability to articulate thoughts in writing in a professional manner</li>
                                                    <li>Good collaboration skills with emphasis on ensuring all input is heard and integrated as necessary</li>
                                                </ul>
                                            </p>
                                        </div>

                                        <hr />

                                        <div id="technical-skills">
                                            <p><b>Technical Skills:</b></p>
                                            <p>
                                                <ul>
                                                    <li>Strong foundations in <b>data structures</b> and general programming</li>
                                                    <li>Beginner-level experience with <b>JavaScript</b> and JavaScript frameworks like <b>NodeJS</b>, <b>ReactJS</b>, Express, and TypeScript</li>
                                                    <li>Ability to work remotely in a productive and collaborational way</li>
                                                    <li>Ability to learn new languages, APIs, and other skills through documentation and research without outside guidance</li>
                                                    <li>Experience working effectively with legacy code with little previous documentation</li>
                                                    <li>Strong eye for structural design of code with emphasis on readability and modularity</li>
                                                    <li>Experience using Java frameworks like SpotBugs and Checkstyle to improve code and ensure code quality</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                } />
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}

export default Resume;