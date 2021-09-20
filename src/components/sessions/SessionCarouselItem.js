import React from "react";

import { connect } from "react-redux";
import "./Session.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import classNames from "classnames";

class SessionCarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { definition: "" };
    // this.state = { sets: [], name: "", description: "" };
  }

  resolveStatus = () => {
    if (this.props.status === "history") {
      return {
        border: "pending",
        definition: this.props.definition,
        readOnly: true,
      };
    } else if (this.props.status === "pending") {
      return {
        border: "pending",
        definition: "",
        readOnly: false,
      };
    } else if (this.props.status === "correct") {
      return {
        border: "correct",
        definition: this.props.definition,
        readOnly: true,
      };
    } else if (this.props.status === "corrected") {
      return {
        border: "corrected",
        definition: this.props.definition,
        readOnly: true,
      };
    } else if (this.props.status === "false") {
      return {
        border: "false",
        definition: this.props.definition,
        readOnly: false,
      };
    }
  };

  render() {
    return (
      <Container fluid="md">
        <Card
          className={classNames(
            "main-card",
            this.resolveStatus().border,
            "w-75",
            "mx-auto"
          )}
        >
          <Card.Header>{this.props.heading}</Card.Header>
          <Card.Body>
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
                  <Form.Control readOnly placeholder={this.props.term} />
                </Col>
                <Col md>
                  <Form onSubmit={this.props.onSubmit}>
                    <Form.Control
                      placeholder={this.resolveStatus().definition}
                      readOnly={this.resolveStatus().readOnly}
                      value={this.props.userInput}
                      onChange={this.props.onChange}
                    />
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SessionCarouselItem;
