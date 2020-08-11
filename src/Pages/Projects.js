import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import { ProjectCard } from '../Components/Cards'

const projects = class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: []
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_GITHUB_PROJECTS)
            .then(res => res.json())
            .then(json => {
                json.sort(function (a, b) {
                    if (a["datePushed"] < b["datePushed"]) {
                        return 1;
                    } else if (a["datePushed"] > b["datePushed"]) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                this.setState({ repos: json })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <div id="projects-header">
                        <h1>Projects</h1>

                        <h6>This page contains a list of all my public repositories on GitHub.</h6>
                    </div>
                </Jumbotron>
                <div>
                    <Card bg="light">
                        <Card.Body>

                            {this.state.repos.map(function (item) {
                                let lastUpdated = new Date(item.datePushed);
                                let createdDate = new Date(item.dateCreated);
                                return <ProjectCard key={item._id} id={item._id} title={item.projectName} btnText="View on GitHub" url={item.githubURL} text={item.description} created={createdDate.toDateString()} updated={lastUpdated.toDateString()} />
                            })}


                        </Card.Body>
                    </Card>
                </div>
            </div>



        );
    }

}

export default projects;