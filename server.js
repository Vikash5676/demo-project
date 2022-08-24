require("dotenv").config();
const port = process.env.PORT || 8080;
const app = require("./app");
const dbConnect = require("./db");
const dbPort = process.env.MONGO_URL;

dbConnect(dbPort).then(() => {
  try {
    app.listen(port, () => {
      console.log(`db is connected,server started at port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
});
