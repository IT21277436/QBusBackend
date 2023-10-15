const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      default: null,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
    firstname: {
      type: String,
      default: null,
      required: false,
    },
    lastname: {
      type: String,
      default: null,
      required: false,
    },
    gender: {
      type: String,
      default: null,
      required: false,
    },
    NIC: {
      type: String,
      default: null,
      required: false,
    },
    balance: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamps: true }
);

// Static signup method
userSchema.statics.signup = async function (
  email,
  password,
  confirmpassword,
  mobile
) {
  // validation
  if (!email || !password || !confirmpassword) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (password !== confirmpassword) {
    throw Error("Password does not match");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    mobile,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
