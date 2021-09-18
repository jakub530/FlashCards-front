import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SessionCard from "./SessionCard";
import SessionSplitter from "./SessionSplitter";

import { sessionService } from "../../services";

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
    console.log(sessions);
    this.setState({ sessions });
  };

  //   componentDidUpdate()
  //   {

  //     this.props.dispatch(setActions.listSets());
  //     console.log("Setlist sets", this.props.sets)
  //   }

  renderSession = () => {
    return this.state.sessions.map((session) => {
      return (
        <SessionCard
          title={session.name}
          description={session.description}
          id={session._id}
        ></SessionCard>
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.sessions ? this.renderSession() : "No sets to show"}
        <div className="d-grid gap-2">
          <Link className="btn btn-primary" type="button" to="/session/create">
            Create a set
          </Link>
          {/* <SessionSplitter></SessionSplitter> */}
          {/* <Button variant="primary" size="lg" onClick={this.createCard}>
                Add Term
              </Button> */}
        </div>
      </div>
    );
  }
}

export default SessionList;
