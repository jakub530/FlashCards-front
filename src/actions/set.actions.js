import { setConstants } from "../constants";
import { setService } from "../services";


const fetchSet = (id) => async (dispatch) => {
  const set = await setService.fetchSet(id);
  dispatch({ type: setConstants.FETCH_SET, payload: set });
};

export const setActions = {
  fetchSet,
};
