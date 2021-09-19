import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setService } from "../../services";
import { setsActions } from "../../actions";
import SetCard from "./SetCard";

class SetListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      edit: this.props.edit,
      delete: this.props.delete,
      select: this.props.select,
    };
  }

  componentDidMount() {
    this.props.dispatch(setsActions.listSets());
    console.log("SetListForm Sets:", this.props.sets);
  }

  componentDidUpdate() {
    console.log("SetListForm State:", this.state);
    this.props.onListUpdate(this.state);
  }

  selectSet = (id) => {
    console.log("Changed");
    console.log(id);
    if (this.state.selected.includes(id)) {
      console.log("Deleting");
      this.setState({
        selected: this.state.selected.filter((elem) => elem !== id),
      });
    } else {
      console.log("Adding");
      this.setState({ selected: [...this.state.selected, id] });
    }
  };

  renderSets = () => {
    return this.props.sets.map((set) => {
      return (
        <SetCard
          title={set.name}
          description={set.description}
          id={set._id}
          handleChange={this.selectSet}
          selected={this.state.selected.includes(set._id)}
          edit={this.state.edit}
          select={this.state.select}
          delete={this.state.delete}
        ></SetCard>
      );
    });
  };

  render() {
    return (
      <div>
        {this.props.sets ? this.renderSets() : "No sets to show"}
        <div className="d-grid gap-2">
          {this.state.edit && (
            <Link className="btn btn-primary" type="button" to="/sets/create">
              Create a set
            </Link>
          )}
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

export default connect(mapStateToProps)(SetListForm);