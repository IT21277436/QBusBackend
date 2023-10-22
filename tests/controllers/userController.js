
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP User Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "email": "23@gmail.com",
      "password": "ColomboAmpara",
      "mobile": "90773838",
      "isRegistered": true,
      "firstname": "hasitha",
      "lastname": "akalanka",
      "gender": "male",
      "NIC": "266728883883",
      "balance": 2000,
     

    };

    const res = await chai.request(serverURL)
      .post('/api/user') 
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });
  describe('HTTP User Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/user') 
  
      expect(res).to.have.status(200);
     
    });
  });
  describe('HTTP User Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const userIdToDelete = '6529722f65774c4bae0977a5'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/user/${userIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      
    });
  });
  
});
