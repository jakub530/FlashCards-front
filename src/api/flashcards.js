import axios from "axios";

export const connect = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3010"
      : "https://flashcard-back-jj.herokuapp.com",
});