import React from "react";
import SetListForm from "./SetListForm";

class SetList extends React.Component {
  render() {
    return (
      <div>
        <SetListForm noCardMessage="You don't have any sets yet" edit delete onListUpdate={() => {}} />
      </div>
    );
  }
}

export default SetList;
