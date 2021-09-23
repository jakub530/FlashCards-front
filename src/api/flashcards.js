import axios from "axios";

export const connect = axios.create({
  baseURL: process.env.NODE_ENV==="development" ? "http://localhost:3010" : "https://flashcard-back-jj.herokuapp.com",
});

// process.env.NODE_ENV==="development"
// mongodb+srv://jakub530:<password>@cluster0.2mbgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority