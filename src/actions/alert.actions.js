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

const cardCorrect = (message) => async (dispatch) => {
  dispatch({ type: alertConstants.SUCCESS_CARD, message });
  await delay(5000);
  dispatch({ type: alertConstants.CLEAR_CARD });
};

const cardWrong = (message) => async (dispatch) => {
    dispatch({ type: alertConstants.ERROR_CARD, message });
    await delay(5000);
    dispatch({ type: alertConstants.CLEAR_CARD });
  };

const cardClear = (message) => async (dispatch) => {
  dispatch({ type: alertConstants.CLEAR_CARD });

};

export const alertActions = {
  success,
  error,
  clear,
  cardCorrect,
  cardWrong,
  cardClear
};
