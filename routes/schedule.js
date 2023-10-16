const express = require("express");
const{
    createSchedule,
    getAllSchedules,
    getScheduleDetails,
    deleteSchedule,
    updateScheduleDetails,
    // searchEmployees,
} = require("../controllers/scheduleController");

// const router = express.Router();
const router = express.Router();

//get all employee
router.get("/", getAllSchedules);

//get a single employee
router.get("/:id", getScheduleDetails);

//POST a new employee
router.post("/", createSchedule);

//DELETE a employee
router.delete("/:id", deleteSchedule);

//UPDATE a employee
router.put("/:id", updateScheduleDetails);

// Search employees based on criteria
// router.post("/search", searchEmployees);

module.exports = router;