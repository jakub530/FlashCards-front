import { userConstants } from "../constants";
import { userService } from "../services";
import history from "../history";

const login = (email, password) => async (dispatch) => {
  dispatch({ type: userConstants.LOGIN_REQUEST, email });

  const { user, error } = await userService.login(email, password);

  if (user) {
    dispatch({ type: userConstants.LOGIN_SUCCESS, user });
  } else {
    dispatch({
      type: userConstants.LOGIN_FAILURE,
      error: error,
    });
  }
};

const logout = () => async (dispatch, getState) => {
  localStorage.removeItem("user");
  dispatch({ type: userConstants.LOGOUT });
};

const register = (email, password, userName) => async (dispatch, getState) => {
  const { user, error } = await userService.register(email, password, userName);

  if (user) {
    dispatch({ type: userConstants.LOGIN_SUCCESS, user });
    history.push("/");
  } else {
    console.log("Error while registering", error)
  }
};


export const userActions = {
  login,
  logout,
  register,
};
