import React from "react";

import { connect } from "react-redux";
import SetCard from "./SetCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { setService } from "../../services";

import { setsActions } from "../../actions";

class SetList extends React.Component {
  componentDidMount() {
    this.props.dispatch(setsActions.listSets());
    console.log("Setlist sets", this.props.sets);
  }

  //   componentDidUpdate()
  //   {

  //     this.props.dispatch(setActions.listSets());
  //     console.log("Setlist sets", this.props.sets)
  //   }

  deleteSet = async (id) => {
    await setService.deleteSet(id);
    console.log("Deleted Set");
    this.props.dispatch(setsActions.listSets());
  };

  renderSets = () => {
    return this.props.sets.map((set) => {
      return (
        <SetCard
          title={set.name}
          description={set.description}
          id={set._id}
          deleteSet={this.deleteSet}
        ></SetCard>
      );
    });
  };

  render() {
    return (
      <div>
        {this.props.sets ? this.renderSets() : "No sets to show"}
        <div className="d-grid gap-2">
          <Link className="btn btn-primary" type="button" to="/sets/create">
            Create a set
          </Link>
          {/* <Button variant="primary" size="lg" onClick={this.createCard}>
                Add Term
              </Button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sets: Object.values(state.sets),
  };
};

export default connect(mapStateToProps)(SetList);
