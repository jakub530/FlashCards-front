import React from 'react';
import _ from 'lodash';
import TermCard from './TermCard'
import Header from './Header';
import { Form } from "react-final-form";
import { setService } from '../../services';
import Button from 'react-bootstrap/Button';
import ObjectID from "bson-objectid";



class SetForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { cards:[], set:{}, init:!this.props.fetchData};
  }

  componentDidMount() {
    this.setState({init:false})
    if(this.props.fetchData)
    {
      this.waitForData()
    }
  }

  fetchTerms = async () => {
    const response = await setService.fetchSet(this.props.id) 
    this.setState({cards:response.cards, set:response.set});
  }

  processCards = (formValues) => {
    const stateCards = this.state.cards.map((elem) => {
      return {
        _id:elem._id, 
        newCard:elem.newCard
      }
    })
    console.log("stateCards:", stateCards)
    const cards = []
    stateCards.forEach(({_id,newCard}) => {
      const card = {...formValues.cards[_id], _id, newCard}
      cards.push(card)
      // if(newCard)
      // {
      //   this.setState({cards:[...this.state.cards.filter(el => el._id !== _id), {_id:ObjectID().toHexString(), newCard:false}]})
      // }
    })


    console.log("Processed cards:", cards)
    return(cards)
  }

  onSubmit = async (formValues) => {
    const cards = this.processCards(formValues)
    const set = formValues.set;

    if(this.props.submit == "patch")
    {
      const id = this.props.id;
      await setService.patchSet(id, set, cards)
    }
    else
    {
      await setService.postSet(set, cards)
    }

  }

  renderCards() {
    console.log("Rendering Cards:", this.state.cards)
    if(this.state.cards)
    {
      return this.state.cards.map(({_id,term,definition}) => {
        return (
          <TermCard
            id={_id}
            key={_id}
            index={_id}
            term={term}
            definition={definition}
            onDelete={() => this.deleteCard(_id)}
          />
        );
      })
    }
  }

  deleteCard = (id) => {
    console.log("Deleting card with id:", id)
    this.setState({cards:[...this.state.cards.filter(el => el._id !== id)]})
  }

  createCard = () => {
    console.log("Creating Card", this.state.cards)
    this.setState({cards:[...this.state.cards, {_id:ObjectID().toHexString(), newCard:true}]})
  }

  waitForData = async () =>{
    console.log("Fetching Terms")
    await this.fetchTerms()
    console.log("Fetched terms")
    this.setState({init:true})
  }

  readInitialState = () => {
    console.log("Reading initial state", this.state)
    if(this.state.init)
    {
      console.log("Modyfing initial state")
      const cards = {}
      this.state.cards.forEach(elem => {
        cards[elem._id] = {
          term:elem.term,
          definition:elem.definition
        }
      })
      console.log("Returning initial state", cards)
      return {cards:cards, set:{title:this.state.set.name, description:this.state.set.description}};
    }
  }

  form = () => {
    return (
      <Form
        initialValues={this.readInitialState()} 
        initialValuesEqual={() => true}
        onSubmit={this.onSubmit} 
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            <Header></Header>
            {this.renderCards()}
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={this.createCard}>
                Add Term
              </Button>
            </div>
            <div>
              <button className="float-end btn btn-primary btn-success mt-2" type="submit" >Save</button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )} />
    )
  }
  
  render (){
    return (
      <div>
        {this.state.init ? this.form() : "Loading"}
      </div>
      
    );
  }
};

export default SetForm;