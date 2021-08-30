import React from 'react';
import _ from 'lodash';
import AddTerm from './AddTerm'
import NewTerm from './NewTerm';
import Header from './Header';
import { Form, Field } from "react-final-form";
import { fetchTerms, addTerm} from '../../actions';
import { connect } from 'react-redux';



class CreateSet extends React.Component {
  componentDidMount() {
    this.props.fetchTerms();
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
    return this.props.terms.terms.map((term,index) => {
      return (
        <AddTerm id={term.id} index={index} key={term.id}></AddTerm>
      );
    })
  }

  componentDidUpdate() {
    console.log(this.props)
  }
  
  render (){
    return (
      <div>
        <Form onSubmit={this.onSubmit} 
        render={({handleSubmit, form, submitting, pristine, values}) => (
        <form onSubmit={handleSubmit}>
          <Header></Header>
          {this.renderTerms()}
          <NewTerm></NewTerm>
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
      terms: state.terms,
  }
}

export default connect(mapStateToProps, {fetchTerms})(CreateSet);