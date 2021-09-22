import { authToken } from "../utility";
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
  console.log("Removing from local storage");
};

const register =async (email, password, name) => {
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

const getAll = async () => {
  // console.log("auth token", authToken().Authorization)
  let response;

  if (authToken().Authorization) {
    const config = {
      headers: { Authorization: authToken().Authorization },
    };
    try {
      response = await connect.get("/users/me", config);
    } catch {
      console.log(response);
      return null;
    }
  } else {
    console.log("You are not logged in");
  }
};

export const userService = {
  login,
  logout,
  getAll,
  register
};
