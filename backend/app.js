require("./db");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", require("./Routes/UserRoutes"));

app.listen(process.env.PORT_URL, () => {
  console.log(`Server is running on port ${process.env.PORT_URL}`);
});
