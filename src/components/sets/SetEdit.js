import React from 'react';
import _ from 'lodash';
import TermCard from './TermCard'
// import NewTerm from './NewTerm';
import Header from './Header';
import { Form, Field } from "react-final-form";
import { setService } from '../../services';
import Button from 'react-bootstrap/Button';
import { FormSpy } from 'react-final-form'



class SetEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = { cards:[], set:{}, init:false};
  }

  componentDidMount() {
    // this.props.dispatch(setActions.fetchSet(this.props.match.params.id));
    this.setState({init:false})
    // this.fetchTerms()
    this.waitForData()
    
  }

  fetchTerms = async () => {
    const set = await setService.fetchSet(this.props.match.params.id) 
    this.setState({cards:set.cards, set:set.set});
  }


  componentDidUpdate() {

  }


  onSubmit = (formValues) => {
    console.log("Cards:", this.state.cards)
    console.log("Form Values:", formValues)
  }

  renderTerms() {
    console.log("SetEdit props:" ,this.props)

    if(this.state.cards)
    {
      console.log("This state cards",this.state.cards)

      return this.state.cards.map(({_id,term,definition}) => {
        // console.log(term)
        // console.log(definition)
        return (
          <TermCard id={_id} key={_id} index={_id} term={term} definition={definition} onDelete={() => this.deleteCard(_id)}></TermCard>
        );
      })
    }
    else
    {
      return (
        <div>Waiting for cards</div>
      );
    }

  }

  deleteCard = (id) => {
    console.log("Deleting card")
    // terms.filter(el => el.id !== action.payload)
    this.setState({cards:[...this.state.cards.filter(el => el._id !== id)]})
  }

  createCard = () => {
    this.setState({cards:[...this.state.cards, {_id:"z" + Math.floor(Math.random() * 1000), newCard:true}]})
    console.log("Created Card", this.state.cards)
  }

  waitForData = async () =>{
    await this.fetchTerms()
    console.log("Fetched terms")
    this.setState({init:true})
  }


  readInitialState = () => {
    
    console.log("Reading initial state", this.state)
    if(this.state.cards && this.state.init && this.state.cards.length > 0)
    {
      console.log("Modyfing initial state")
      const cards = {}
      this.state.cards.forEach(elem => {
        cards[elem._id] = {
          description:"",
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
          {this.renderTerms()}
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


export default SetEdit;