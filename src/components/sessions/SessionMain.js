import React from "react";

import { connect } from "react-redux";

import Carousel from "react-bootstrap/Carousel";

import { alertActions, sessionActions } from "../../actions";
import SessionCarouselItem from "./SessionCarouselItem";

class SessionMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, userInput: "" };
  }

  componentDidMount() {
    this.setState({ activeIndex: this.props.previousCards.length });
  }

  renderPreviousItems() {
    return this.props.previousCards.map((card, index) => {
      return (
        <Carousel.Item key={index}>
          <SessionCarouselItem
            term={card.term}
            definition={card.definition}
            status="history"
            heading="History"
            onChange={() => {}}
            userInput=""
            onSubmit={() => {}}
          ></SessionCarouselItem>
        </Carousel.Item>
      );
    });
  }

  evolveSession = async (update) => {
    const id = this.props.id;
    await this.props.evolveSession(id, update);
  };

  submitCard = async () => {
    if (this.props.itemFlag === "pending" || this.props.itemFlag === "false") {
      if (this.state.userInput === this.props.currentCard.definition) {
        this.evolveSession("correct");
        this.props.alertSuccess("Correct Answer");
      } else if (this.state.userInput === "") {
      } else {
        this.evolveSession("false");
        this.props.alertError("Incorrect Answer");
      }
    } else if (
      this.props.itemFlag === "correct" ||
      this.props.itemFlag === "corrected"
    ) {
      await this.evolveSession("next");
      this.props.alertClear();
      this.setState({
        activeIndex: this.props.previousCards.length,
        userInput: "",
      });
    }
    this.setState({ userInput: "" });
  };

  renderCurrentItem() {
    return (
      <Carousel.Item>
        <SessionCarouselItem
          term={this.props.currentCard.term}
          definition={this.props.currentCard.definition}
          status={this.props.itemFlag}
          onSubmit={this.handleSubmit}
          heading="Type Your Answer"
          userInput={this.state.userInput}
          onChange={this.updateItem}
        ></SessionCarouselItem>
      </Carousel.Item>
    );
  }

  mockNextItem() {
    return (
      <Carousel.Item>
        <SessionCarouselItem
          term="MOCK"
          definition="MOCK"
          status="history"
          heading="Should not be visible"
          onChange={() => {}}
          userInput=""
          onSubmit={() => {}}
        ></SessionCarouselItem>
      </Carousel.Item>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.submitCard();
  };

  handleSelect = (selectedIndex, e) => {
    if (selectedIndex === 1 + this.props.previousCards.length) {
      return this.submitCard();
    } else {
      this.setState({ activeIndex: selectedIndex });
    }
  };

  updateItem = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <Carousel
        wrap={false}
        interval={null}
        slide={false}
        activeIndex={this.state.activeIndex}
        onSelect={this.handleSelect}
      >
        {this.renderPreviousItems()}
        {this.renderCurrentItem()}
        {this.mockNextItem()}
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.session) {
    return {
      itemFlag: "pending",
      id: 0,
      currentCard: {},
      previousCard: [],
    };
  }
  return {
    itemFlag: state.session.session.state.itemFlag,
    currentCard: state.session.cards.currentCard,
    previousCards: state.session.cards.previousCards,
    id: state.session.session._id,
  };
};

export default connect(mapStateToProps, {
  evolveSession: sessionActions.evolveSession,
  alertSuccess: alertActions.success,
  alertError: alertActions.error,
  alertClear: alertActions.clear,
})(SessionMain);
