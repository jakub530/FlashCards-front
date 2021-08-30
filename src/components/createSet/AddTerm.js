import React from 'react';
import { Field } from 'react-final-form';
import { deleteTerm} from '../../actions';
import { connect } from 'react-redux';

class AddTerm extends React.Component {

  deleteEntry = () => {
    console.log(this.props.id)
    //console.log(this.props)
    console.log(this.props)
    this.props.deleteTerm(this.props.id);
  } 

  render (){
    return (
      <div className="card mb-3 border-0" style={{background:"rgba(0, 0, 0, 0.0)"}}>
        <div className="card-header text-white bg-secondary">
          id={this.props.id} index={this.props.index}
          <i className="bi bi-trash float-end"style={{cursor:"pointer"}} onClick={this.deleteEntry}></i>
        </div>
        <div className="card-body bg-dark text-white">
            <div className="row">
              <div className="col">
                <label className="form-label">Term</label>
              </div>
              <div className="col">
                <label className="form-label">Definition</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Field 
                  name={`terms.${this.props.index}.term`} 
                  component="input" type="text" 
                  className="form-control"  
                  placeholder="Term" 
                />
              </div>
              <div className="col">
                <Field 
                  name={`description-${this.props.id}`} 
                  component="input" 
                  type="text" 
                  className="form-control" 
                  placeholder="Description"
                />
              </div>
            </div>
        </div>
      </div>
    );
  }
};

// export default AddTerm;
export default connect(null, { deleteTerm })(AddTerm);