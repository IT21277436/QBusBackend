const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
    {
        routeNumber: {
            type: String,
            required: true,
        },
        busId: {
            type: String,
            required: true,
        },
        driverId: {
            type: String,
            required: true,
        },
        departureTime: {
            type: String,
            required: true,
        },
        arrivalTime: {
            type: String,
            required: true,
        },
        frequency: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Schedules" ,ScheduleSchema)