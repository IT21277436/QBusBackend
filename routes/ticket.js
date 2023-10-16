const express = require("express");

// controller functions
const {
  getTickets,
  deleteTicket,
  updateTicket,
  getTicket,
  createTicket,
} = require("../controllers/ticketController");

const router = express.Router();

router.post("/", createTicket);

router.get("/:id", getTicket);

router.patch("/:id", updateTicket);

router.delete("/:id", deleteTicket);

// admin panel
router.get("/all", getTickets);

module.exports = router;
