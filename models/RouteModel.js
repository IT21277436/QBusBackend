const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoutesSchema = new Schema(
  {
    routeNumber: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    totalBusFare: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Routes", RoutesSchema);
