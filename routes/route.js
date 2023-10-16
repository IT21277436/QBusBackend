const express = require("express");

const {
    createRoute,
    getAllRoutes,
    getRouteDetails,
    deleteRoute,
    updateRouteDetails,
    // searchRoutes,
} = require("../controllers/RouteController");

const router = express.Router();

// Get all routes
router.get("/", getAllRoutes);

// Get a single route
router.get("/:id", getRouteDetails);

// Create a new route
router.post("/", createRoute);

// Delete a route
router.delete("/:id", deleteRoute);

// Update a route
router.put("/:id", updateRouteDetails);

// Search routes based on criteria
// router.post("/search", searchRoutes);

module.exports = router;