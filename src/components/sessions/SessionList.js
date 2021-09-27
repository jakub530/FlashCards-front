import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { sessionService } from "../../services";

import SessionCard from "./SessionCard";

class SessionList extends React.Component {
  componentDidMount() {
    this.waitForData();
  }

  constructor(props) {
    super(props);
    this.state = { sessions: [] };
  }

  waitForData = async () => {
    const sessions = await sessionService.fetchSessions();
    this.setState({ sessions });
  };

  onDelete = () => {
    this.waitForData();
  };

  renderSession = () => {
    return this.state.sessions.map((session) => {
      return (
        <SessionCard
          key={session._id}
          title={session.name}
          description={session.description}
          id={session._id}
          onDelete={this.onDelete}
        ></SessionCard>
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.sessions.length === 0 ? (
          <Card className="mt-2">
            <Card.Header>You don't have any session yet</Card.Header>
            <Card.Body>
              <Link
                className="btn btn-primary"
                type="button"
                to="/sessions/create"
              >
                Create your first session
              </Link>
            </Card.Body>
          </Card>
        ) : (
          <div>
            {this.state.sessions ? (
              <div>
                {this.renderSession()}
                <div className="d-grid gap-2">
                  <Link
                    className="btn btn-primary"
                    type="button"
                    to="/sessions/create"
                  >
                    Create a session
                  </Link>
                </div>
              </div>
            ) : (
              "Loading"
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SessionList;
