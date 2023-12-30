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
    if (!isemail) {
      return res.status(400).json({ message: "Enter valid credential 1" });
    }
    if (isemail.password != user.password) {
      return res.status(400).json({ message: "Enter valid credential 2" });
    }

    const tokenData = {
      userId: isemail._id,
      email: isemail.email,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY);

    const apiData = {
      message: "Login success",
      UserData: {
        UserId: isemail._id,
        Email: isemail.email,
        FirstName: isemail.firstName,
        LastName: isemail.lastName,
      },
      token,
    };
    return res.status(200).json(apiData);
  } catch (error) {
    console.log("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userProfile = async (req, res) => {
  try {
    const UserData = await Users.findById(req.user.userId).select("-password");

    const spilitdob = UserData.dob.split(" ");
    const dob = parseInt(spilitdob[2]);
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    const updatedUserData = {
      ...UserData.toObject(),
      fullName: `${UserData.firstName} ${UserData.lastName}`,
      age: currentYear - dob,
    };
    return res.status(200).json(updatedUserData);
  } catch (error) {
    console.log("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { userRegister, userLogin, userProfile };
