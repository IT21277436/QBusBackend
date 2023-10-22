const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactUsSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ContactUs",contactUsSchema);