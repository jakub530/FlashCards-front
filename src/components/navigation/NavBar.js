import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { userActions } from "../../actions";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  logOut = () => {
    this.props.dispatch(userActions.logout());
  };

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
    console.log(this.props);
    console.log("NavBar Update", this.props);
    const auth = this.props.auth;

    if (auth && "loggedIn" in auth && auth.loggedIn === true) {
      console.log("auth logged in is true");
      console.log("Auth", auth);
      if (this.state.loggedIn === false) {
        this.setState({ loggedIn: true });
      }
    } else {
      if (this.state.loggedIn === true) {
        this.setState({ loggedIn: false });
      }
    }
    //this.props.dispatch(userActions.getAll());
  }

  componentDidUpdate() {
    this.props.dispatch(userActions.getAll());
    console.log(this.props);
    console.log("NavBar Update", this.props);
    const auth = this.props.auth;

    if (auth && "loggedIn" in auth && auth.loggedIn === true) {
      console.log("auth logged in is true");
      console.log("Auth", auth);
      if (this.state.loggedIn === false) {
        this.setState({ loggedIn: true });
      }
    } else {
      if (this.state.loggedIn === true) {
        this.setState({ loggedIn: false });
      }
    }
  }
  //   onClick = () => {
  //     console.log(this.props)
  //     this.props.testApi()
  //   }

  render() {
    return (
      <Navbar expand="lg" className="Navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              FlashCards - {process.env.NODE_ENV}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Needed to put login on the right side apparently */}
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0"></Nav>
            <Nav>
              
              {this.state.loggedIn ? (
                <Link className="nav-link" onClick={this.logOut} to="/">
                  Logout
                </Link>
              ) : (
                <React.Fragment>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
