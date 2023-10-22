const express = require("express");
const { createPayment } = require("../controllers/paymentController");

const router = express.Router();

//POST a new payment
router.post("/", createPayment);

module.exports = router;
