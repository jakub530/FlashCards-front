import { utilityService } from "./utility.service";

const login = async (email, password) => {
  const response = await utilityService.handleRequest(`/users/login`, "post", {
    email, password
  }, false);

  if (response.user) {
    let user = response.user;
    user.token = response.token;
    localStorage.setItem("user", JSON.stringify(user));
    return { user, error: null };
  } else {
    return { error: "Unable to log in", user: null };
  }
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
};

const register = async (email, password, name) => {
  // remove user from local storage to log user out
  const response = await utilityService.handleRequest(`/users`, "post", {
    email, password, name
  }, false);

  if (response.user) {
    let user = response.user;
    user.token = response.token;
    localStorage.setItem("user", JSON.stringify(user));
    return { user, error: null };
  } else {
    return { error: "Unable to register", user: null };
  }
};

export const userService = {
  login,
  logout,
  register,
};
