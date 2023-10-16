const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP Bus Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "busId": "B00123",
      "licenseNo": "C00098765",
      "model": "HONDA",
      "make": "FORD",
      "driverId": "D0098",
      "inspectorId": "I00876"
    };

    const res = await chai.request(serverURL)
      .post('/api/bus') 
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });
  describe('HTTP Bus Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/bus') 
  
      expect(res).to.have.status(200);
     
    });
  });
  describe('HTTP Bus Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const busIdToDelete = '652d63e9b8a307c39d3dddab'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/bus/${busIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
    });
  });
  
});
