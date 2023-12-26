const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userProfile,
} = require("../Controller/UsersController");
const verifyToken = require("../Middleware");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/user-profile", userProfile);

module.exports = router;
