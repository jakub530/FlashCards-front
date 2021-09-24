import { setConstants } from "../constants";
import { setService } from "../services";

const listSets = () => async (dispatch) => {
  const sets = await setService.fetchSets();
  dispatch({ type: setConstants.LIST_SETS, payload: sets });
};

export const setsActions = {
  listSets,
};
