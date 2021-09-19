import React from "react";
import SetListForm from "./SetListForm";

class SetList extends React.Component {
  render() {
    return (
      <div>
        <SetListForm edit delete onListUpdate={() => {}} />
      </div>
    );
  }
}

export default SetList;
