import React from "react";
import { Field } from "react-final-form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Header extends React.Component {
  render() {
    return (
      <Card className="mt-3 mb-2">
        <Card.Header as="h5">
          Title & Description
          {/* {props.title} */}
        </Card.Header>
        <Card.Body>
          <Form>
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
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Header;
