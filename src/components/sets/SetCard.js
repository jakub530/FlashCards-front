import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { setActions } from "../../actions";
import { setsActions } from "../../actions";
import { useDispatch } from "react-redux";
import { setService } from "../../services"
import history from "../../history";
import Form from "react-bootstrap/Form";
import classNames from "classnames";

import './sets.scss'

const SetCard = (props) => {
  const dispatch = useDispatch();

  const fetchSet = async (id) => {
    console.log("Clicked fetch set");

    await dispatch(setActions.fetchSet(id));
    history.push(`/sets/edit/${props.id}`);
  };

  const deleteSet = async (id) => {
    await setService.deleteSet(id);
    console.log("Deleted Set");
    dispatch(setsActions.listSets());
  };

  return (
    <Card className="mt-3 mb-2">
      <Card.Header as="h5" className={classNames({'selected-card':props.selected}, "secondary")}>
        <Form.Check inline label={props.title} aria-label="option 1" onChange={() => {props.handleChange(props.id)}} />
        {/* {props.title} */}
      </Card.Header>
      <Card.Body>
      
        <Card.Text>{props.description}</Card.Text>

        <Button variant="primary" onClick={() => fetchSet(props.id)}>
          Edit Set
        </Button>{" "}
        <Button
          className="ml-4"
          variant="danger"
          onClick={() => deleteSet(props.id)}
        >
          Delete Set
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SetCard;
