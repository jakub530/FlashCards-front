import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { setActions } from '../../actions';
import { connect } from 'react-redux';
import {useDispatch} from 'react-redux';
import history from '../../history';


const SetCard = (props) => {
    
    const dispatch = useDispatch()

    const fetchSet = async (id) => {
        console.log("Clicked fetch set")
        
        await dispatch(setActions.fetchSet(id));
        history.push(`/sets/edit/${props.id}`);
    }

    return (
        <Card className="mt-3 mb-2">
          <Card.Header as="h5">{props.title}</Card.Header>
          <Card.Body>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary" onClick={() => fetchSet(props.id)}>Edit Set</Button>
          </Card.Body>
        </Card>
    );
};


export default SetCard;