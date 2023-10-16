
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP Schedule Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "routeNumber": "23",
      "busId": "B00987",
      "driverId": "D00987",
      "departureTime": "6.00 am",
      "arrivalTime": "7.00 am",
      "frequency": "DAILY"
    };

    const res = await chai.request(serverURL)
      .post('/api/schedule') 
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });
  describe('HTTP Schedule Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/schedule') 
  
      expect(res).to.have.status(200);
     
    });
  });
  describe('HTTP Schedule Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const scheduleIdToDelete = '652d5ef99397aae44417e117'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/schedule/${scheduleIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      
    });
  });
  
});
