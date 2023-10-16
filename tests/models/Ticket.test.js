const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const Ticket = require("../../models/ticketModel");
const User = require("../../models/userModel"); 

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

class UserClass {
  constructor(userId) {
    this.user = null;
  }

  async ticketUpdated(updatedTicket) {
  
  }
}

describe('TicketClass', function () {
  it('should assign a user to a ticket', async function () {
    // Create a test user and ticket
    const testUser = new User({ name: "Test User" });
    await testUser.save();

    const testTicketNumber = "TEST123";
    const testTicketClass = new TicketClass(testTicketNumber);

    
    await testTicketClass.assignUser(testUser._id);

   
    const updatedTicket = await Ticket.findOne({ ticketNumber: testTicketNumber });
    expect(updatedTicket.user.toString()).to.equal(testUser._id.toString());
  });

  it('should handle user not found', async function () {
    const nonExistentUserId = "nonexistentuserid";
    const testTicketNumber = "TEST456";
    const testTicketClass = new TicketClass(testTicketNumber);

    
    try {
      await testTicketClass.assignUser(nonExistentUserId);
     
      expect(true).to.be.false;
    } catch (error) {
      expect(error.message).to.equal("User not found");
    }
  });

  
});
