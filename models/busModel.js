const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const busSchema = new Schema(
    {
        busId: {
            type: String,
            required: true,
        },
        licenseNo: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            default: true,
        },
        make: {
            type: String,
            default: null,
        },
        driverId: {
            type: String,
            required: true,
        },
        inspectorId: {
            type: String,
            required: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bus",busSchema);