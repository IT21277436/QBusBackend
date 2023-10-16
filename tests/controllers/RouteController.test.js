
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP Route Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "routeNumber": "23",
      "routeName": "Colombo-Ampara",
      "distance": "90 Km",
      "totalBusFare": "250.00 RS"
    };

    const res = await chai.request(serverURL)
      .post('/api/route') 
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });
  describe('HTTP Route Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/route') 
  
      expect(res).to.have.status(200);
     
    });
  });
  describe('HTTP Route Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const routeIdToDelete = '652d5e579397aae44417e10d'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/route/${routeIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      
    });
  });
  
});
