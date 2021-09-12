import React from 'react';
import { addTerm} from '../../actions';
import { connect } from 'react-redux';
import { setActions } from '../../actions';

class TermCreate extends React.Component {
  
  onSubmit = test => {
    console.log(test)
    this.props.createTerm(test);
  }
    
  render (){
    return (
      <div className="card mb-3 border-0 " style={{background:"rgba(0, 0, 0, 0.0)"}}>
        <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.onSubmit}>
        <h2><i className="bi bi-plus-circle-fill"></i></h2>
      </button>
      </div>
    );
  }
};



export default connect(null, { })(NewTerm)