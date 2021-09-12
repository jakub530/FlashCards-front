import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import history from "../../history";


import { userActions } from '../../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

    }

    handleChange = (e) => {
        
        const { name, value } = e.target;
        console.log(value)
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
           </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);