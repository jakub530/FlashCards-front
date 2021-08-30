import React from 'react';

class SetDetails extends React.Component {
    
  render (){
    return (
      <div>
        <div className="card mb-3 border-0" style={{background:"rgba(0, 0, 0, 0.0)"}}>
          <div className="card-header  text-white  bg-secondary" >
            Title & Description
          </div>
          <div className="card-body text-white bg-dark">
            <form>
            <div className="mb-3">
              <label  className="form-label">Title</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </form >
          </div>
        </div>
      </div>
    );
  }
};

export default SetDetails;