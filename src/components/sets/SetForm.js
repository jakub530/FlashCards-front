import React from "react";
import _ from "lodash";
import TermCard from "./TermCard";
import Header from "./Header";
import { Form } from "react-final-form";
import { setService } from "../../services";
import Button from "react-bootstrap/Button";
import ObjectID from "bson-objectid";

import history from "../../history";

class SetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: {}, set: {}, init: !this.props.fetchData };
  }

  componentDidMount() {
    this.setState({ init: !this.props.fetchData });
    if (this.props.fetchData) {
      this.waitForData();
    }
  }

  arrayToObject(cards) {
    let output = {};
    cards.forEach(({ _id, term, definition }) => {
      output[_id] = {
        term,
        definition,
      };
    });
    return output;
  }

  objectToArray(cards) {
    console.log("Mapping object to array", cards);
    const ids = Object.keys(cards);
    const cardList = [];
    ids.forEach((_id) => {
      cardList.push({
        _id,
        term: cards[_id].term,
        definiton: cards[_id].definition,
      });
    });
    return cardList;
  }

  fetchTerms = async () => {
    const response = await setService.fetchSet(this.props.id);

    this.setState({
      cards: this.arrayToObject(response.cards),
      set: response.set,
    });
  };

  processCards = (formValues) => {
    const stateCards = this.objectToArray(this.state.cards).map((elem) => {
      return {
        _id: elem._id,
      };
    });
    console.log("stateCards:", stateCards);
    const cards = [];
    stateCards.forEach(({ _id, newCard }) => {
      const card = { ...formValues.cards[_id], _id };
      cards.push(card);
      // if(newCard)
      // {
      //   this.setState({cards:[...this.state.cards.filter(el => el._id !== _id), {_id:ObjectID().toHexString(), newCard:false}]})
      // }
    });

    console.log("Processed cards:", cards);
    return cards;
  };

  onSubmit = async (formValues) => {
    const cards = this.processCards(formValues);
    const set = formValues.set;
    const id = this.props.id;
    if (this.props.submit === "patch") {
      await setService.patchSet(id, set, cards);
    } else {
      await setService.createSet(id, set, cards);
      history.push(`/sets/edit/${id}`);
    }
  };

  renderCards() {
    console.log("Rendering Cards:", this.state.cards);
    if (this.state.cards) {
      const cardList = this.objectToArray(this.state.cards);
      console.log("Card list", cardList);
      return cardList.map(({ _id, term, definition }, index) => {
        return (
          <TermCard
            id={_id}
            key={_id}
            index={index + 1}
            term={term}
            definition={definition}
            onDelete={() => this.deleteCard(_id)}
          />
        );
      });
    }
  }

  deleteCard = (id) => {
    console.log("Deleting card with id:", id);
    this.setState({ cards: _.omit(this.state.cards, id) });
  };

  createCard = () => {
    console.log("Creating Card", this.state.cards);
    const newId = ObjectID().toHexString();
    this.setState({
      cards: { ...this.state.cards, [newId]: { newCard: true } },
    });
    console.log("Set after new card", this.state.cards);
  };

  waitForData = async () => {
    console.log("Fetching Terms");
    await this.fetchTerms();
    console.log("Fetched terms");
    this.setState({ init: true });
  };

  readInitialState = () => {
    console.log("Reading initial state", this.state);
    if (this.state.init) {
      console.log("Modyfing initial state");
      const cards = this.state.cards;
      console.log("Returning initial state", cards);
      return {
        cards,
        set: {
          title: this.state.set.name,
          description: this.state.set.description,
        },
      };
    }
  };

  form = () => {
    return (
      <Form
        initialValues={this.readInitialState()}
        initialValuesEqual={() => true}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Header></Header>
            {this.renderCards()}
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={this.createCard}>
                Add Term
              </Button>
            </div>
            <div>
              <button
                className="float-end btn btn-primary btn-success mt-2"
                type="submit"
              >
                Save
              </button>
            </div>
            {process.env.NODE_ENV === "development" && (
              <pre style={{ color: "white" }}>
                {JSON.stringify(values, 0, 2)}
              </pre>
            )}
          </form>
        )}
      />
    );
  };

  render() {
    return <div>{this.state.init ? this.form() : "Loading"}</div>;
  }
}

export default SetForm;
