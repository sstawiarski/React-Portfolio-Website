import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import { ProjectCard } from '../Components/Cards'

const projects = class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: true,
            githubCall: false
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
            }).then(
                this.setState({ loading: false })
            )
            .catch((error) => {
                console.log("ERROR: Local server fetch failed, trying GitHub API.");
                console.log(error);
                fetch("https://api.github.com/users/sstawiarski/repos")
                    .then(res => res.json())
                    .then(json => {
                        json.sort(function (a, b) {
                            if (a["pushed_at"] < b["pushed_at"]) {
                                return 1;
                            } else if (a["pushed_at"] > b["pushed_at"]) {
                                return -1;
                            } else {
                                return 0;
                            }
                        })
                        this.setState({ repos: json })
                    }).then(
                        this.setState({
                            loading: false,
                            githubCall: true
                        })
            )});
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
                    <Card bg="light" id="projects-listing">
                        <Card.Body>
                            {this.state.loading && <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>}
                            {!this.state.githubCall && this.state.repos.map(function (item) {
                                let lastUpdated = new Date(item.datePushed);
                                let createdDate = new Date(item.dateCreated);
                                return <ProjectCard key={item._id} id={item._id} title={item.projectName} btnText="View on GitHub" url={item.githubURL} text={item.description} created={createdDate.toDateString()} updated={lastUpdated.toDateString()} />
                            })}
                            {this.state.githubCall && this.state.repos.map(function (item) {
                                let lastUpdated = new Date(item.pushed_at);
                                let createdDate = new Date(item.created_at);
                                return <ProjectCard key={item.id} id={item.id} title={item.name} btnText="View on GitHub" url={item.html_url} text={item.description} created={createdDate.toDateString()} updated={lastUpdated.toDateString()} />
                            })}


                        </Card.Body>
                    </Card>
                </div>
            </div>



        );
    }

}

export default projects;