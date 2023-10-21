const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    ticketPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    distance: {
      type: String,
      required: true,
    },
    routeNumber: {
      type: String,
      required: true,
    },
    pickup: {
      type: String,
      required: true,
    },
    dropOff: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
