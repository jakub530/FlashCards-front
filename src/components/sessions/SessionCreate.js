import React from "react";
import SetListForm from "../sets/SetListForm";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import history from "../../history";
import { sessionActions } from "../../actions";
import Form from "react-bootstrap/Form";

class SessionCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sets: [], name: "", description: "" };
  }

  onListUpdate = (idList) => {
    this.setState({ sets: idList });
  };

  createSession = async () => {
    const session = await this.props.createSession({
      sets: this.state.sets.selected,
      session: { name: this.state.name, description: this.state.description },
    });
    history.push(`/sessions/main/view/${session._id}`);
  };

  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  updateDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <div>
        <Card className="mt-3" style={{ backgroundColor: "#505C70" }}>
          <Card.Title
            className="text-center mt-3 py-2 mx-3 font-size:40px"
            style={{ color: "white", backgroundColor: "#082032" }}
          >
            <h4>Name and Description</h4>
          </Card.Title>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  component="input"
                  value={this.state.name}
                  onChange={this.updateName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.description}
                  onChange={this.updateDescription}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mt-3" style={{ backgroundColor: "#505C70" }}>
          <Card.Title
            className="text-center mt-3 py-2 mx-3 font-size:40px"
            style={{ color: "white", backgroundColor: "#082032" }}
          >
            <h4>Select Sets To Add To Your Session</h4>
          </Card.Title>
          <Card.Body>
            <SetListForm select onListUpdate={this.onListUpdate} />
          </Card.Body>
        </Card>
        <Button
          variant="primary"
          size="lg"
          className="mt-3"
          onClick={this.createSession}
        >
          Create Session
        </Button>
      </div>
    );
  }
}

export default connect(null, { createSession: sessionActions.createSession })(
  SessionCreate
);
