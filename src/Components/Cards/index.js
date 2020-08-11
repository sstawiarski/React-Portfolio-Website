import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cards extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} className="card featured-card">
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    {(this.props.subtitle && <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>)}
                    {(this.props.text) && <Card.Text>
                        {this.props.text}
                    </Card.Text>}
                    {this.props.href && this.props.linkText && <Card.Link target="_blank" href={this.props.href}>{this.props.linkText}</Card.Link>}
                </Card.Body>
            </Card>
        );
    }
}

export const ProjectCard = class ProjectCard extends React.Component {
    render() {
        return (
            <Card id={this.props.id} className="project-list-item">
                <Card.Header as="h5">{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Text style={{ fontWeight: "bold" }}>Description: </Card.Text><Card.Text>{this.props.text}</Card.Text><br />
                    <Row>
                        <Col>
                            <Card.Text style={{ fontWeight: "bold" }}>Date created: </Card.Text><Card.Text className="project-date">{this.props.created}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text style={{ fontWeight: "bold" }}>Last updated: </Card.Text><Card.Text className="project-date">{this.props.updated}</Card.Text>
                        </Col>
                    </Row>

                    <Button id="project-link" variant="primary" href={this.props.url} target="_blank">{this.props.btnText}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export const ResumeCard = class ResumeCard extends React.Component {
    render() {
        return (
            <Card id={this.props.id} className="project-list-item">
                <Card.Header as="h5">{this.props.title}</Card.Header>
                <Card.Body>
                    <Card.Text style={this.props.style}>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}


export default Cards;