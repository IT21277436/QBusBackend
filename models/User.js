const User = require("../models/userModel");

class UserClass {
  constructor(userId) {
    this.userId = userId;
  }

  async ticketUpdated(ticket) {
    console.log(`User ${this.userId}'s ticket updated: ${ticket.ticketNumber}`);
  }
}
