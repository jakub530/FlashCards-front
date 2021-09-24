import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";


class MainMenu extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <div className="d-grid gap-2  mx-auto">
          <Link to="/sessions" className="menu-link">
            <Card className="mt-1">
              <Card.Header>
                <Card.Title>Sessions</Card.Title>
              </Card.Header>
              <Card.Body>
                Continue Existing Session and Create New Ones
              </Card.Body>
            </Card>
          </Link>
          <Link to="/sets" className="menu-link">
            <Card className="mt-1">
              <Card.Header>
                <Card.Title>Learning Sets</Card.Title>
              </Card.Header>
              <Card.Body>Create and Manage Your Learning Sets</Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(MainMenu);
