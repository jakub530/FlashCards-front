import { connect } from "../api/flashcards";

const login = async (email, password) => {
  const response = await connect.post("/users/login", { email, password });

  if (response.data.user) {
    let user = response.data.user;
    user.token = response.data.token;
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
  const response = await connect.post("/users", { email, password, name });

  if (response.data.user) {
    let user = response.data.user;
    user.token = response.data.token;
    localStorage.setItem("user", JSON.stringify(user));
    return { user, error: null };
  } else {
    return { error: "Unable to log in", user: null };
  }
};


export const userService = {
  login,
  logout,
  register,
};
