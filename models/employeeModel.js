const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        employeeId: {
            type: String,
            required: true,
        },
        employeeName: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            default: null,
        },
        category: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Employee",employeeSchema);