import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { testApi } from "../../actions";
import Card from "react-bootstrap/Card";

import { userActions } from "../../actions";

class MainMenu extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  onClick = () => {
    console.log(this.props);
    this.props.testApi();
  };

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
