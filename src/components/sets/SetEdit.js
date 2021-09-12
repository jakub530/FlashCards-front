import React from 'react';
import _ from 'lodash';
import TermCard from './TermCard'
// import NewTerm from './NewTerm';
import Header from './Header';
import { Form, Field } from "react-final-form";
import { connect } from 'react-redux';
import { setActions } from '../../actions';

class SetEdit extends React.Component {
  componentDidMount() {
    this.props.dispatch(setActions.fetchSet(this.props.match.params.id));

  }


  componentDidUpdate() {
    console.log(this.props)
    if(this.props.cards)
    {
      console.log("Updating component")
      if(!this.state.init)
      {
        this.setState({cards:this.props.cards, init:true})
        console.log("SetEdit state", this.state)
      }
    }

  }
  constructor(props){
    super(props);
    this.state = { cards:[], set:{}, init:false};
  }

  onSubmit = (formValues) => {
    console.log(this.props.terms.terms)
    console.log(this.props.terms.terms.map(el=>{return el.id}))
    console.log(formValues)
  }

  getId(str) {
    return str.split('-')[1];
  }


  renderTerms() {
    console.log("SetEdit props:" ,this.props)

    if(this.props.cards)
    {


      return this.props.cards.map(({_id,term,definition}) => {
        return (
          <TermCard id={_id} key={_id} index={_id} term={term} definition={definition}></TermCard>
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


  readInitialState() {
    if(this.props.cards)
    {
      const cards = {}
      this.props.cards.forEach(elem => {
        cards[elem._id] = {
          description:"",
          term:elem.term,
          definition:elem.definition

        }
      })
      return {cards:cards};
    }
  }
  
  render (){
    return (
      <div>
        <Form
        initialValues={this.readInitialState()} 
        onSubmit={this.onSubmit} 
        render={({handleSubmit, form, submitting, pristine, values}) => (
        <form onSubmit={handleSubmit}>
          <Header></Header>
          {this.renderTerms()}
          {/* <NewTerm></NewTerm> */}
          <div>
            <button className="float-end btn btn-primary btn-success" type="submit">Save</button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
        )} />
      </div>
      
    );
  }
};

const mapStateToProps = (state) => {
  return { 
      cards: state.set.cards,
  }
}

export default connect(mapStateToProps)(SetEdit);