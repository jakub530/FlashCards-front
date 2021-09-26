import React from "react";
import { connect } from "react-redux";

import { sessionActions } from "../../actions";

import SessionDebug from "./SessionDebug";
import SessionMain from "./SessionMain";
import SessionSplitter from "./SessionSplitter";

class SessionTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { init: false };
  }

  componentDidMount() {
    this.props.fetchSession(this.props.idAdress);
  }

  componentDidUpdate() {
    if (!this.state.init && this.props.session.state) {
      this.setState({ init: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.init ? <SessionSplitter /> : "Loading"}
        {this.state.init ? <SessionMain /> : "Loading"}
        {process.env.NODE_ENV === "development" && (
          <SessionDebug></SessionDebug>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session.session,
  };
};

export default connect(mapStateToProps, {
  fetchSession: sessionActions.fetchSession,
})(SessionTop);
