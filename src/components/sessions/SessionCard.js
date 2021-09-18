import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { sessionActions } from '../../actions';
import { connect } from 'react-redux';
import {useDispatch} from 'react-redux';
import history from '../../history';
import { sessionService } from '../../services';

const SetCard = (props) => {
    
    // const dispatch = useDispatch()
    const dispatch = useDispatch()

    const fetchSet = async (id) => {
        console.log("Clicked fetch set")
        
        await dispatch(sessionActions.fetchSession(id));
        // history.push(`/sets/edit/${props.id}`);
        history.push(`/sessions/main/view/${props.id}`);
    }



    return (
        <Card className="mt-3 mb-2">
          <Card.Header as="h5">{props.title}</Card.Header>
          <Card.Body>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>{fetchSet(props.id)}}>Enter Session</Button> {' '}
            {/* <Button className="ml-4" variant="danger" onClick={() => props.deleteSet(props.id)}>Delete Set</Button> */}
          </Card.Body>
        </Card>
    );
};


export default SetCard;