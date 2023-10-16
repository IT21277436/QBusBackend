const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    
    const token = createToken(user._id);
    const id = user._id;
    const isRegistered = user.isRegistered;

    res.status(200).json({ email, id, token, isRegistered });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const signupUser = async (req, res) => {
  const { email, password, confirmpassword, mobile } = req.body;

  try {
    const user = await User.signup(email, password, confirmpassword, mobile);

   
    const token = createToken(user._id);
    const id = user._id;

    res.status(200).json({ email, id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getUserdetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const user = await User.findById(id, { password: 0 });

  if (!user) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(user);
};

// update user
const updateUserdetails = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete user
const deleteUserdetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }

  res.status(200).json(user);
};


const listAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  if (!users) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(users);
};

const getBalance = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  try {
    const user = await User.findById(id, "balance");

    if (!user) {
      return res.status(404).json({ error: "No data found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const topup = async (req, res) => {
  const { id } = req.params;
  const { balance } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: balance } },
      {
        new: true,
      }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getUserdetails,
  updateUserdetails,
  deleteUserdetails,
  listAllUsers,
  topup,
  getBalance,
};
