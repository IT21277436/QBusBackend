const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    payType: {
      type: String,
      required: true,
    },
    cardNo: {
      type: String,
      required: true,
    },
    expMonth: {
      type: String,
      default: true,
    },
    expYear: {
      type: String,
      default: null,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
