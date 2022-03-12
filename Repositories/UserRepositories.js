const User = require("../Models/User");

const getUserByUserName = async (name) => {
  return User.findOne({ username: name }).then((data) => {
    return data;
  });
};

const saveUser = async (user) => {
  return User.create(user).then((data) => {
    return data;
  });
};

module.exports = {
  getUserByUserName,
  saveUser,
};
