const express = require("express");
const app = express();
app.set("view engine", "ejs");
const router = require("./routes/loginRoute");

app.use(express.json());

app.use("/auth", router);

module.exports = app;
