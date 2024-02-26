const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const dataRoute = require("./routes/dataRoute");
const checkRoute = require("./routes/checkRoute");
require("dotenv").config();

app.use([cors(), express.json(), express.urlencoded({ extended: true })]);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", userRoute);
app.use("/api/data", dataRoute);
app.use("/api/check", checkRoute);

app.listen(process.env.PORT, () => {
  console.log("Good to go");
});
