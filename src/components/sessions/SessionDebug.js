import React from "react";

import { connect } from "react-redux";
import { sessionActions, sessionCardActions } from "../../actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class SessionDebug extends React.Component {
  evolveSession(update) {
    const id = this.props.session.session._id;
    this.props.evolveSession(id, update);
  }

  findAllSessionCards(id) {
    this.props.findAllSessionCards(id);
  }

  render() {
    return (
      <Card className="mt-3">
        <Card.Title className="mt-3 mx-3">Debug</Card.Title>
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
            <Row className="mt-2">
              <Button
                onClick={() =>
                  this.findAllSessionCards(this.props.session.session._id)
                }
                variant="secondary"
              >
                Find Session Cards
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
    session: state.session,
  };
};

export default connect(mapStateToProps, {
  fetchSession: sessionActions.fetchSession,
  evolveSession: sessionActions.evolveSession,
  findAllSessionCards: sessionCardActions.findAllSessionCards,
})(SessionDebug);
