const express = require("express");
const cors = require("cors");

const userController = require("./Controllers/UserController");
const mongoose = require("mongoose");

const app = express();

const PORT = 4001;
const tokenVerifier = require("./Middleware/TokenVerifier");

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
  methods: ["GET", "PUT", "POST"],
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/protected", tokenVerifier.verify, (req, res) => {
  res.json({
    success: true,
    data: {
      secret: `CS572 is the best course ever!`,
    },
  });
});

app.post("/api/users/login", userController.login);
app.post("/api/users/signup", userController.signUp);
app.get("/api/users/verify/:email", userController.verifyEmail);
app.get("/api/users/check", (req, res) => {
  res.json({
    data: "Holla",
  });
});

mongoose.connect("mongodb://localhost:27017/user_db").then(
  () => {
    app.listen(PORT, () => {
      console.log(`User app listening on PORT ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
