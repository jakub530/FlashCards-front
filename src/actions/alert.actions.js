import { alertConstants } from "../constants";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const success = (message) => async (dispatch) => {
  dispatch({ type: alertConstants.SUCCESS, message });
  await delay(5000);
  dispatch({ type: alertConstants.CLEAR });
};

const error = (message) => async (dispatch) => {
  dispatch({ type: alertConstants.ERROR, message });
  await delay(5000);
  dispatch({ type: alertConstants.CLEAR });
};

const clear = () => async (dispatch) => {
  dispatch({ type: alertConstants.CLEAR });
};

export const alertActions = {
  success,
  error,
  clear,
};
