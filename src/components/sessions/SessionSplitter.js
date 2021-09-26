import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { utility } from "./utility";

class SessionSplitter extends React.Component {
  renderColors(input) {
    if (!this.props.session) {
      return <div>No buckets</div>;
    }

    const buckets = this.props.session.state.bucketLevels;

    return utility.colors(buckets.length).map((term, index) => {
      return (
        <Col
          className={
            index !== this.props.session.state.currentBucket
              ? "text-center font-weight-bold border bucket inactiveBucket"
              : "text-center font-weight-bold border bucket currentBucket"
          }
          style={{ backgroundColor: term }}
        >
          {buckets[index]}
        </Col>
      );
    });
  }

  render() {
    return (
      <Card className="my-2">
        <Card.Header>Session Progress</Card.Header>
        <Card.Body>
          <Container
            className="d-flex justify-content-center"
            style={{ height: "50px" }}
          >
            <Row className="w-50 align-items-center">
              {this.renderColors(this.input)}
            </Row>
          </Container>
          <Link
            className="btn btn-primary"
            to={`/sessions/main/items/${this.props.session._id}`}
          >
            View Cards
          </Link>
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

export default connect(mapStateToProps)(SessionSplitter);
