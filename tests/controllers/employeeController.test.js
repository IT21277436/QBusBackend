
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP employee Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; // Update this with your server URL
    const requestBody = {
      "employeeId": "E00123",
      "name": "waseem",
      "nic": "200006544326",
      "contactNumber": "0775677890",
      "category": "Driver",
      "region": "Galle"
    };

    const res = await chai.request(serverURL)
      .post('/api/employee') // Update the correct endpoint path
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });


  describe('HTTP employee Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; // Update with your server URL
  
      const res = await chai.request(serverURL)
        .get('/api/employee') // Update with the correct endpoint path
  
      expect(res).to.have.status(200);
      // Add more assertions as needed to validate the response data.
    });
  });

  
  describe('HTTP employee Post', function () {
    it('POST', async function () {
      const serverURL = 'http://localhost:4000'; // Update with your server URL
      const requestBody = {
        "employeeId": "E00123",
        "name": "waseem",
        "nic": "200006544326",
        "contactNumber": "0775677890",
        "category": "Driver",
        "region": "Galle"
      };
  
      const res = await chai.request(serverURL)
        .post('/api/employee') // Update the correct endpoint path
        .send(requestBody)
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      // Add more assertions as needed to validate the response data.
    });
  });

  
  describe('HTTP gorest Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; // Update with your server URL
      const employeeIdToDelete = 'E00123'; // Update with the ID of the employee to delete
  
      const res = await chai.request(serverURL)
        .delete(`/api/employee/${employeeIdToDelete}`) // Update the correct endpoint path
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      // Add more assertions as needed to validate the response data.
    });
  });
  
});
