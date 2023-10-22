
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP Employee Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "employeeId": "E00123",
      "employeeName": "nimal",
      "nic": "200006544326",
      "contactNumber": "0775677890",
      "category": "Driver",
      "region": "Galle"
    };

    const res = await chai.request(serverURL)
      .post('/api/employee')
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });

  describe('HTTP Employee Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/employee') 
  
      expect(res).to.have.status(200);
    });
  });

  describe('HTTP Employee Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const employeeIdToDelete = '652d6f53f5541d96aabde524'; 

      const res = await chai.request(serverURL)
        .delete(`/api/employee/${employeeIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      
    });
  });
  
});
