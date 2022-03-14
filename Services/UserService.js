const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userRepository = require("../Repositories/UserRepositories");

const secretKey = process.env.MY_SECRET_KEY;

const getAllUsers = () => {
  return userRepository.getAllTodos().then((data) => {
    return data;
  });
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

const signUp = (user) => {
  return userRepository.saveUser(user).then((data) => {
    return jwt.sign(data.toJSON(), secretKey);
  });
};

/**
 * go check the db
 * @param {*} user
 * @returns
 */
const authenticate = (username, password) => {
  return userRepository.getUserByUserName(username).then(async (data) => {
    if (data == undefined) {
      return false;
    }
    let isSamePassword = await bcrypt.compare(password, data.password);
    console.log(isSamePassword);
    if (!isSamePassword) return false;
    return jwt.sign(data.toJSON(), secretKey);
  });
};

const verifyEmail = async (email) => {
  let data = await userRepository.getUserByUserName(email);
  return data != null ? true : false;
};

/**
 * verify token if it is a valid token
 * @param {*} token
 */
const verify = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  getAllUsers,
  signUp,
  authenticate,
  verify,
  hashPassword,
  verifyEmail,
};
