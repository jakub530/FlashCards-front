import React from 'react';

class NewTerm extends React.Component {
    
  render (){
    return (
      <div className="card mb-3 border-0 " style={{background:"rgba(0, 0, 0, 0.0)"}}>
        <button type="button" className="btn btn-dark btn-lg btn-block">
        <h2><i className="bi bi-plus-circle-fill"></i></h2>
      </button>
      </div>
    );
  }
};

export default NewTerm;