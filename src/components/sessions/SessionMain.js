import React from "react";

import { connect } from "react-redux";
import "./Session.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import FloatingLabel from 'react-bootstrap/FloatingLabel'

class SessionMain extends React.Component {
  render() {
    return (
      <Container className="mt-2">
        <Row>
          <Col md>
            <Form.Label>Term</Form.Label>
          </Col>
          <Col md>
            <Form.Label>Definition</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Control
              type="email"
              readOnly
            //   placeholder={this.props.cards.currentCard.term}
            />
          </Col>
          <Col md>
            <Form.Control type="email" placeholder="name@example.com" />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session.session.session,
  };
};

export default connect(mapStateToProps)(SessionMain);
