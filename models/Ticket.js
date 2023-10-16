const Ticket = require("../models/ticketModel");
const User = require("../models/userModel");

class TicketClass {
  constructor(ticketNumber) {
    this.ticket = new Ticket({ ticketNumber });
    this.user = null;
  }

  async assignUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    this.user = user;
    this.ticket.user = user._id;
    await this.ticket.save();

    user.tickets.push(this.ticket._id);
    await user.save();

    this.notifyObservers();
  }

  notifyObservers() {
    this.user.tickets.forEach((ticketId) => {
      const observer = new UserClass(ticketId);
      observer.ticketUpdated(this.ticket);
    });
  }
}
