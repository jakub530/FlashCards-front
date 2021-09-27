import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

import { sessionCardActions } from "../../actions";

class SessionItemList extends React.Component {
  componentDidMount() {
    this.props.findCards(this.props.idAdress);
  }

  constructor(props) {
    super(props);
    this.state = { sessions: [] };
  }

  renderTable() {
    return this.props.sessionCards.map((item, ind) => {
      return (
        <tr key={ind} className={ind % 2 === 0 ? "even" : "odd"}>
          <td>{ind + 1}</td>
          <td>{item.term}</td>
          <td>{item.definition}</td>
          <td>{item.set}</td>
          <td>{item.bucket}</td>
          <td>{item.history.length}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Link
          className="btn btn-primary my-2"
          to={`/sessions/main/view/${this.props.idAdress}`}
        >
          Return to Session
        </Link>
        <Table hover className="sessionItemList">
          <thead>
            <tr>
              <th>#</th>
              <th>Term</th>
              <th>Definition</th>
              <th>Set</th>
              <th>Bucket</th>
              <th>Times Seen</th>
            </tr>
          </thead>
          <tbody>
            {this.props.sessionCards.length !== 0 ? (
              this.renderTable()
            ) : (
              <tr></tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionCards: state.sessionCard,
  };
};

export default connect(mapStateToProps, {
  findCards: sessionCardActions.findAllSessionCards,
})(SessionItemList);
