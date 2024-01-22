require("dotenv").config();

const express = require("express");
const workoutroute = require("./routes/workouts");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "**",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutroute);

mongoose
  .connect(process.env.MONGO_URI, {
    retryWrites: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
