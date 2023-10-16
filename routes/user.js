const express = require("express");

// controller functions
const {
  signupUser,
  loginUser,
  getUserdetails,
  updateUserdetails,
  deleteUserdetails,
  listAllUsers,
  topup,
  getBalance,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// profile route
router.get("/profile/:id", getUserdetails);
router.get("/balance/:id", getBalance);

// profile route
router.patch("/profile/:id", updateUserdetails);
router.patch("/topup/:id", topup);

// profile route
router.delete("/profile/:id", deleteUserdetails);

// admin panel
router.get("/admincp", listAllUsers);

module.exports = router;
