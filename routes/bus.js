const express = require("express");
const{
    createBus,
    getAllBuses,
    getBusDetails,
    deleteBus,
    updateBusDetails,
    // searchEmployees,
} = require("../controllers/busController");

const router = express.Router();

//get all bus
router.get("/", getAllBuses);

//get a single bus
router.get("/:id", getBusDetails);

//POST a new bus
router.post("/", createBus);

//DELETE a bus
router.delete("/:id", deleteBus);

//UPDATE a employee
router.put("/:id", updateBusDetails);

// Search employees based on criteria
// router.post("/search", searchEmployees);

module.exports = router;