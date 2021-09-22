import { connect } from "../api/flashcards";
import { userConstants } from "../constants";
import { userService } from "../services";
import history from "../history";

const login = (email, password) => async (dispatch) => {
  dispatch({ type: userConstants.LOGIN_REQUEST, email });

  const { user, error } = await userService.login(email, password);

  if (user) {
    dispatch({ type: userConstants.LOGIN_SUCCESS, user });
    // history.push("/");
  } else {
    dispatch({
      type: userConstants.LOGIN_FAILURE,
      error: "There was a problem",
    });
  }
};

const logout = () => async (dispatch, getState) => {
  //     console.log(getState())
  //   const {userName, token} = getState().authentication;

  //   await connect.post('/users/logout',{name:userName, token:token})
  localStorage.removeItem("user");

  dispatch({ type: userConstants.LOGOUT });
};

const register = (email, password, userName) => async (dispatch, getState) => {

  const {user, error} = await userService.register(email, password, userName);

  if(user) {
    dispatch({type:userConstants.LOGIN_SUCCESS, user});
    history.push("/");
  }
}

const getAll = () => async (dispatch, getState) => {
  dispatch({ type: userConstants.GETALL_REQUEST });
  console.log("Get State", getState());
  const response = await userService.getAll();
  console.log(response);

  // users => dispatch(success(users)),
  // error => dispatch(failure(error))

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
};

export const userActions = {
  login,
  logout,
  getAll,
  register
};
