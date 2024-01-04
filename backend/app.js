require("./db");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: false },
//     cookie: {
//       expires: 300000,
//     },
//   })
// );
// app.use(function (req, res, next) {
//   if (!req.session.count) {
//     req.session.count = {};
//   }
//   req.session.count = (req.session.count || 0) + 1;

//   next();
// });

app.use("/auth", require("./Routes/UserRoutes"));
app.use("/post", require("./Routes/PostRoutes"));

app.listen(process.env.PORT_URL, () => {
  console.log(`Server is running on port ${process.env.PORT_URL}`);
});
