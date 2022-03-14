const userService = require("./../Services/UserService");

const login = async (req, res) => {
  let user = req.body;
  let authToken = await userService.authenticate(user.userName, user.password);

  if (authToken != null) {
    res.json({
      authToken,
    });
  } else {
    res.send(403);
  }
};

const verifyEmail = async (req, res) => {
  let { email } = req.params;
  let isEmailFound = await userService.verifyEmail(email);
  res.json({ success: true, data: { exists: isEmailFound } });
};

const signUp = async (req, res) => {
  let user = req.body;
  user.password = await userService.hashPassword(user.password);
  let authToken = await userService.signUp(user);

  if (authToken != null) {
    res.json({
      authToken,
    });
  } else {
    res.send(403);
  }
};

module.exports = {
  login,
  signUp,
  verifyEmail,
};
