const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

  describe('HTTP Ticket Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const ticketIdToDelete = '6535322fb0fcdd21ca4de0ee'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/ticket/${ticketIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
    });
  });