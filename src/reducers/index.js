import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import { auth } from './auth.reducer';
import { users } from './user.reducer';
import { sets } from './sets.reducer';
import { set } from './set.reducer';
import { session } from './session.reducer';


export default combineReducers({
  auth,
  users,
  sets,
  set,
  session
});