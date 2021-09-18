import { setConstants } from "../constants";
import { connect } from "../api/flashcards";
import { setService } from "../services";

const listSets = () => async (dispatch, getState) => {
  const sets = await setService.fetchSets();
  console.log("list sets action", sets);
  dispatch({ type: setConstants.LIST_SETS, payload: sets });
};

export const setsActions = {
  listSets,
};
