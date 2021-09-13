import React from 'react';
import SetForm from './SetForm';
import ObjectID from "bson-objectid";


class SetCreate extends React.Component {
  
  render (){
    return (
      <SetForm 
        fetchData={false}
        submit="put"
        id={ObjectID().toHexString()}
      />
    );
  }
};

export default SetCreate;