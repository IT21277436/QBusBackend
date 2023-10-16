const mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

const Ticket = require("../../models/ticketModel");

describe("Ticket Model", function () {
  
  before(async function () {
    await Ticket.deleteMany({});
  });

  it("should create a new ticket", async function () {
    const newTicketData = {
      ticketPrice: 10,
      distance: 50,
      routeNumber: "Route123",
      pickup: "Pickup Location",
      dropOff: "Drop-off Location",
    };

    const newTicket = new Ticket(newTicketData);
    const savedTicket = await newTicket.save();

    expect(savedTicket._id).to.exist;
    expect(savedTicket.ticketPrice).to.equal(newTicketData.ticketPrice);
    expect(savedTicket.distance).to.equal(newTicketData.distance);
    expect(savedTicket.routeNumber).to.equal(newTicketData.routeNumber);
    expect(savedTicket.pickup).to.equal(newTicketData.pickup);
    expect(savedTicket.dropOff).to.equal(newTicketData.dropOff);
  });

  it("should require ticketPrice field", async function () {
    const newTicketData = {
      distance: 50,
      routeNumber: "Route123",
      pickup: "Pickup Location",
      dropOff: "Drop-off Location",
    };

    const newTicket = new Ticket(newTicketData);
    let validationError = null;

    try {
      await newTicket.validate();
    } catch (error) {
      validationError = error;
    }

    expect(validationError).to.exist;
    expect(validationError.errors.ticketPrice).to.exist;
  });

  
});

