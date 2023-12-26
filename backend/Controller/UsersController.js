const Users = require("../Models/UsersModel");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  const user = req.body;

  try {
    const isemail = await Users.find({ email: user.email });

    if (isemail.length === 0) {
      const register = new Users(user);
      await register.save();
      return res.status(201).json({ message: "User Registered" });
    } else {
      return res.status(400).json({ message: "Email already exists" });
    }
  } catch (error) {
    console.error("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  const user = req.body;
  try {
    const isemail = await Users.findOne({ email: user.email });
    if (Object.keys(isemail).length === 0) {
      return res.status(400).json({ message: "Enter valid credential" });
    }
    if (isemail.password !== user.password) {
      return res.status(400).json({ message: "Enter valid credential" });
    }
    const token = jwt.sign(user, process.env.SECRET_KEY);
    const data = {
      message: "Login success",
      isemail,
      token,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.log("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { userRegister, userLogin };
