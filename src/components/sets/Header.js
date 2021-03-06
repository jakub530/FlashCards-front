import React from "react";
import { Field } from "react-final-form";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

class Header extends React.Component {
  render() {
    return (
      <Card className="mt-3 mb-2">
        <Card.Header as="h5">Title & Description</Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Field
              component="input"
              name="set.title"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Field
              component="textarea"
              name="set.description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </Form.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default Header;
