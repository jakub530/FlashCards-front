import React from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { userActions } from "../../actions";
import {alertActions} from "../../actions"

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      userName: "",
      password: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password, userName } = this.state;
    const { dispatch } = this.props;
    if(password.length < 8)
    {
      dispatch(alertActions.error("Password needs to have at least 8 characters"));
      return;
    }
    
    if (email && password && userName) {
      const response = dispatch(userActions.register(email, password, userName));
    }
  };

  render() {
    return (
      <Container fluid="md">
        <Card className="my-2 mx-auto w-50">
          <Card.Header>
            <h2>Sign Up</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="Enter User Name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
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

              <Form.Group className="mb-3">
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
