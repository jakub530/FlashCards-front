import React from "react";
import { Field } from "react-final-form";
import { deleteTerm } from "../../actions";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class TermCard extends React.Component {
  render() {
    return (
      <Card className="mt-2 mb-2">
        <Card.Header>
          id={this.props.id} index={this.props.index}
          <i
            className="bi bi-trash float-end"
            style={{ cursor: "pointer" }}
            onClick={this.props.onDelete}
          ></i>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <label className="form-label">Term</label>
              </Col>
              <Col>
                <label className="form-label">Definition</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  name={`cards.${this.props.index}.term`}
                  component="input"
                  type="text"
                  className="form-control"
                  placeholder="Term"
                />
              </Col>
              <Col>
                <Field
                  name={`cards.${this.props.id}.definition`}
                  component="input"
                  type="text"
                  className="form-control"
                  placeholder="Description"
                />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

// export default AddTerm;
export default connect(null)(TermCard);
