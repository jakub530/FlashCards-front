import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateSet from './createSet/CreateSet'

const App = () => {
  return (
    <div style={{background:"#ccc"}}>
      <div className="container" >
        <CreateSet></CreateSet>
      </div>
    </div>
  );
}

document.body.style = 'background: #ccc;';

export default App;