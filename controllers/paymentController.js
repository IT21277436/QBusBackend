const Payment = require("../models/paymentModel");
const mongoose = require("mongoose");

const createPayment = async (req, res) => {
  const { payType, cardNo, expMonth, expYear, cvv } = req.body;
  //add payment to db
  try {
    const payment = await Payment.create({
      payType,
      cardNo,
      expMonth,
      expYear,
      cvv,
    });
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPayment,
};
