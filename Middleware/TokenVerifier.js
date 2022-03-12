const userService = require("../Services/UserService");
const verify = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
    return false;
  }
  let token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    res.sendStatus(403);
  } else {
    try {
      let response = userService.verify(token);
      if (typeof response == "undefined") res.sendStatus(403);
      else next();
    } catch (err) {
      res.sendStatus(403);
    }
  }
};

module.exports = {
  verify,
};
