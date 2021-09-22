import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import history from "../../history";

import { userActions } from "../../actions";

class Register extends React.Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      email: "",
      userName:"",
      password: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    console.log(this.state)
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password, userName } = this.state;
    const { dispatch } = this.props;
    if (email && password && userName) {
      dispatch(userActions.register(email, password, userName));
    }
  };

  render() {
    const { loggingIn } = this.props;
    const { email, userName, password, submitted } = this.state;
    return (
      <Container fluid="md">
 

      <Card className="my-2 mx-auto w-50">
        <Card.Header>
        <h2>Sign Up</h2>
        </Card.Header>
        <Card.Body>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter User Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create account
          </Button>
        </Form>
        </Card.Body>
      </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.auth;
  return {
    loggingIn,
  };
}

export default connect(mapStateToProps)(Register);