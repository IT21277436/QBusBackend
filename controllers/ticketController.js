const Ticket = require("../models/ticketModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const getTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No data found" });
  }

  const ticket = await Ticket.findById(id);

  if (!ticket) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(ticket);
};

const updateTicket = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ticket" });
  }

  const ticket = await Ticket.findOneAndDelete({ _id: id });

  if (!ticket) {
    return res.status(400).json({ error: "No such ticket" });
  }

  res.status(200).json(ticket);
};

const getTickets = async (req, res) => {
  const ticket = await Ticket.find({}).sort({ createdAt: -1 });

  if (!ticket) {
    return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(ticket);
};

const createTicket = async (req, res) => {
  try {
    const { ticketPrice, distance, routeNumber, pickup, dropOff, user } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ error: "Invalid User ID" });
    }

    const ticket = await Ticket.create({
      ticketPrice,
      distance,
      routeNumber,
      pickup,
      dropOff,
      user,
    });

    await User.findByIdAndUpdate(user, { $push: { tickets: ticket._id } });

    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTickets,
  deleteTicket,
  updateTicket,
  getTicket,
  createTicket,
};
