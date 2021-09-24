import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { auth } from "./auth.reducer";
import { sets } from "./sets.reducer";
import { set } from "./set.reducer";
import { session } from "./session.reducer";
import { sessionCard } from "./session.card.reducer";

export default combineReducers({
  auth,
  sets,
  set,
  session,
  sessionCard,
});
