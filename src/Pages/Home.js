import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Cards from '../Components/Cards';
import Container from 'react-bootstrap/Container';

const home = () => {
    return (
        <div>
            <Jumbotron>
                <Container fluid="sm">
                <Row>
                    <Col>
                        <div id="image-container">
                            <img id="picture" src="https://avatars1.githubusercontent.com/u/38707588?s=400&u=11c732eb47e3fd305345d6d6875abf918304d912&v=4" alt="Shawn Stawiarski" />
                        
                            <h1>Shawn Stawiarski</h1>
                            <h4 id="job-title">Software Engineer</h4>
                            <h5 id="location-info">
                                <p>Pittsburgh, PA</p>
                            </h5>
                            <h6 id="specializations">
                                <p>Specializing in Java, JavaScript, React, and C++</p>
                            </h6>
                        </div>
                    </Col>
                    <Col id="info">

                            <p>
                                Hi, my name is Shawn Stawiarski. I am a Software Engineering student at Arizona State University. I am on track to graduation in Spring 2021.
                    </p>
                            <p>
                                Throughout my studies, I have primarily worked with
                                Java, though some other languages such as C/C++ and database systems like MySQL were common in my program. I have been attempting to learn more frontend development, including JavaScript/TypeScript and JS frameworks like NodeJS, Express, and React.
                    </p>

                    </Col>
                </Row>
                </Container>
            </Jumbotron>

            <div>
                <Card bg="light">
                    <Card.Body>
                        <h4 id="featured-projects">Featured Projects</h4>
                        <Row id="card-holder">
                            <Cards title="JSON REST API Client" subtitle="for testing REST APIs" text="A simple JSON REST API client written in HTML and JavaScript that prints out the results of various CRUD operations." href="https://github.com/sstawiarski/REST-API-Client" linkText="View on GitHub" />
                            <Cards title="Basic Calculator" subtitle="a simple, web-based calculator" text="This is a simple calculator written in TypeScript, HTML, and styled with CSS. Made by following a tutorial from Freshman.Tech." href="https://github.com/sstawiarski/Basic-Calculator" linkText="View on GitHub" />
                            <Cards title="Movie Database" subtitle="A CLI application for a movie database" text="Written in Java, this application utilizes JDBC to connect to a MySQL database and allow for the user to perform various CRUD operations on the database without exposing underlying MySQL queries." href="https://github.com/sstawiarski/SER322-Team5" linkText="View on GitHub" />
                        </Row>
                    </Card.Body>
                </Card>

            </div>
        </div>

    );
}

export default home;