import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUserById: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUsers: function(userData) {
    return axios.post("/api/users", userData);
  },
  login: function(login){
    return axios.post("/api/users/login", login);

  },
  signup: function(signup){
    return axios.post("/api/users/", signup);
  }
};
