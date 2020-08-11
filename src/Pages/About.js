import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Cards from '../Components/Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

const AlertDismissable = () => {
  return (
    <Alert variant="success" dismissible id="email-success-alert">Email successfully sent.</Alert>
  );
}

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target.elements;

    if (target.formGridEmail.value === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(target.formGridEmail.value)) {
      return;
    }

    let body = {
      firstName: target.formGridFirstName.value,
      lastName: target.formGridLastName.value,
      email: target.formGridEmail.value,
      message: target.formGridTextArea.value
    };

    const fun = async () => {
      await fetch(process.env.REACT_APP_SEND_EMAIL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    }

    fun().then(this.setState({ alert: true })).catch(err => console.log(err));

    target.formGridFirstName.value = '';
    target.formGridLastName.value = '';
    target.formGridEmail.value = '';
    target.formGridTextArea.value = '';
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({ alert: false });
  }

  render() {
    return (
      <Jumbotron>
        <h1 id="contact-header">Contact me</h1>

        <Row id="card-holder">

          <Cards title="Phone" linkText="(412) 212-8518" href="tel:+14122128518" />
          <Cards title="Email" href="mailto:contact@shawnstawiarski.com" linkText="contact@shawnstawiarski.com" />

        </Row>

        <div id="email-form">
          <h4>Send me an email</h4>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstName" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="lastName" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="johnsmith@email.com" />
            </Form.Group>
            <Form.Group controlId="formGridTextArea">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows="10" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            {this.state.alert && <AlertDismissable />}

          </Form>
        </div>


      </Jumbotron>


    );
  }

}

export default About;