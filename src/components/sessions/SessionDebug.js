import React from "react";

import { connect } from "react-redux";
import "./Session.css";

// import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { sessionActions } from "../../actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class SessionDebug extends React.Component {
  constructor(props) {
    super(props);
  }

  evolveSession(update) {
    console.log(this.props.session.session._id);
    console.log(update);
    const id = this.props.session.session._id;
    this.props.evolveSession(id, update);
  }

  render() {
    return (
      <Card className="mt-3" style={{ background: "#bbb" }}>
        <Card.Title>Debug</Card.Title>
        <Card.Body>
          <Container>
            <Row className="mt-2">
              <Button
                onClick={() => this.evolveSession("correct")}
                variant="success"
              >
                Correct
              </Button>
            </Row>
            <Row className="mt-2">
              <Button
                onClick={() => this.evolveSession("false")}
                variant="danger"
              >
                Incorrect
              </Button>
            </Row>
            <Row className="mt-2">
              <Button
                onClick={() => this.evolveSession("next")}
                variant="secondary"
              >
                Next
              </Button>
            </Row>
            <pre>{JSON.stringify(this.props.session, null, 2)}</pre>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session.session,
  };
};

export default connect(mapStateToProps, {
  fetchSession: sessionActions.fetchSession,
  evolveSession: sessionActions.evolveSession,
})(SessionDebug);
