import axios from "axios";

export const connect = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3010"
      : "https://flashcards-europe-jj.herokuapp.com",
});
