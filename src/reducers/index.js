import { combineReducers } from "redux";
import { auth } from "./auth.reducer";
import { sets } from "./sets.reducer";
import { set } from "./set.reducer";
import { session } from "./session.reducer";
import { alert } from "./alert.reducer";
import { alertCard } from "./alert.card.reducer";
import { sessionCard } from "./session.card.reducer";

export default combineReducers({
  auth,
  sets,
  set,
  session,
  sessionCard,
  alert,
  alertCard,
});
