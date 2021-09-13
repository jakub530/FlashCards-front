import React from 'react';
import { Field } from 'react-final-form';



class Header extends React.Component {
    
  render (){
    return (
      <div>
        <div className="card mb-3 mt-3 border-0" style={{background:"rgba(0, 0, 0, 0.0)"}}>
          <div className="card-header  text-white  bg-secondary" >
            Title & Description
          </div>
          <div className="card-body text-white bg-dark">
            <div className="mb-3">
              <label  className="form-label">Title</label>
              <Field component="input" name="set.title" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Description</label>
              <Field component="textarea" name="set.description" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;