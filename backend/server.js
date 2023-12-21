require("dotenv").config();

const express = require("express");
const workoutroute = require("./routes/workout");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutroute);

mongoose.connect(process.env.MONGO_URI).then(()=>{
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
}).catch((err)=>{
 console.log(err)
});


