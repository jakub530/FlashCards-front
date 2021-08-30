import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import setCreate from './setCreate';


export default combineReducers({
  terms: setCreate,
});