const express = require("express");
const cors = require("cors");

const userController = require("./Controllers/UserController");
const mongoose = require("mongoose");

const app = express();

const HOST = process.env.DB_HOST | "localhost";
const DB_PORT = process.env.DB_PORT | 27017;
const API_PORT = process.env.API_PORT | 5000;
const DATABASE = process.env.TODO_DATABASE | "activity_db";

const tokenVerifier = require("./Middleware/TokenVerifier");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    message: "Activity Management Application Under construction",
    info: "try POST : /api/users/login resource if you have need credentials",
  });
});

app.get("/api/activities", tokenVerifier.verify, (req, res) => {
  res.json({
    success: true,
    data: {
      secret: `Work In Progress`,
    },
  });
});

app.post("/api/users/login", userController.login);
app.post("/api/users/signup", userController.signUp);

mongoose.connect("mongodb://" + HOST + ":" + DB_PORT + "/" + DATABASE).then(
  () => {
    app.listen(API_PORT, () => {
      console.log(`Activity Tracking App listening on PORT ${API_PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
