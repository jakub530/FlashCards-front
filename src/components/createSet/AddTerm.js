import React from 'react';

class AddTerm extends React.Component {
    
  render (){
    console.log(this.props)
    return (
      <div className="card mb-3 border-0" style={{background:"rgba(0, 0, 0, 0.0)"}}>
        <div className="card-header text-white bg-secondary">
          {this.props.id}
          <i className="bi bi-trash float-end"></i>
        </div>
        <div className="card-body bg-dark text-white">
          <form>
            <div className="row">
              <div className="col">
                <label>Term</label>
              </div>
              <div className="col">
                <label>Definition</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Term"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Definition"/>
              </div>
            </div>
          </form >
        </div>
      </div>
    );
  }
};

export default AddTerm;