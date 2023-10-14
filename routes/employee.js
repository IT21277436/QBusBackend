const express = require("express");
const{
    createEmployee,
    getAllEmployees,
    getEmployeeDetails,
    deleteEmployee,
    updateEmployeeDetails,
    // searchEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

//get all employee
router.get("/", getAllEmployees);

//get a single employee
router.get("/:id", getEmployeeDetails);

//POST a new employee
router.post("/", createEmployee);

//DELETE a employee
router.delete("/:id", deleteEmployee);

//UPDATE a employee
router.put("/:id", updateEmployeeDetails);

// Search employees based on criteria
// router.post("/search", searchEmployees);

module.exports = router;