import React from "react";

import { connect } from "react-redux";

import Carousel from "react-bootstrap/Carousel";
import Badge from 'react-bootstrap/Badge'

import { alertActions, sessionActions } from "../../actions";
import SessionCarouselItem from "./SessionCarouselItem";

class SessionMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, userInput: "", cardState:{type:"", message:""} };
  }

  componentDidMount() {
    this.setState({ activeIndex: this.props.previousCards.length });
    this.updateBadge()
  }



  updateBadge() {
    if(this.props.itemFlag==="pending")
    {
      this.setState({cardState:{type:"default",message:"Type Your Answer"}})
    }
    else if(this.props.itemFlag==="correct" || this.props.itemFlag==="corrected")
    {
      this.setState({cardState:{type:"success",message:"Correct Answer"}})
    }
    else
    {
      this.setState({cardState:{type:"danger",message:"Incorrect Answer"}})
    }
  }

  renderPreviousItems() {
    return this.props.previousCards.map((card, index) => {
      return (
        <Carousel.Item key={index}>
          <SessionCarouselItem
            term={card.term}
            definition={card.definition}
            status="history"
            heading={<div>History</div>}
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

  renderBadge = () => {
    return (
    <Badge className={`customBadge-${this.state.cardState.type}`}>
      {this.state.cardState.message}
    </Badge>);
  }

  submitCard = async () => {
    if (this.props.itemFlag === "pending" || this.props.itemFlag === "false") {
      if (this.state.userInput === this.props.currentCard.definition) {
        await this.evolveSession("correct");
        // this.props.alertCardSuccess("Correct Answer");
      } else if (this.state.userInput === "") {
      } else {
        await this.evolveSession("false");
        // this.props.alertCardError("Wrong Answer");
      }
    } else if (
      this.props.itemFlag === "correct" ||
      this.props.itemFlag === "corrected"
    ) {
      await this.evolveSession("next");
      // this.props.alertCardClear();
      this.setState({
        activeIndex: this.props.previousCards.length,
        userInput: "",
      });
    }
    this.updateBadge();
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
          heading={this.renderBadge()}
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
    alertCard: state.alertCard,
  };
};

export default connect(mapStateToProps, {
  evolveSession: sessionActions.evolveSession,
  alertCardSuccess: alertActions.cardCorrect,
  alertCardError: alertActions.cardWrong,
  alertCardClear: alertActions.cardClear,
})(SessionMain);
