
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('HTTP ContactUs Post', function () {
  it('POST', async function () {
    const serverURL = 'http://localhost:4000'; 
    const requestBody = {
      "email": "23@gmailcom",
      "subject": "Colombo-Ampara",
      "message": "90 Km",
    };

    const res = await chai.request(serverURL)
      .post('/api/contactUs') 
      .send(requestBody)
      .set('Content-Type', 'application/json');

    expect(res).to.have.status(200);
  });
  describe('HTTP ContactUs Get', function () {
    it('GET', async function () {
      const serverURL = 'http://localhost:4000'; 
  
      const res = await chai.request(serverURL)
        .get('/api/contactUs') 
  
      expect(res).to.have.status(200);
     
    });
  });
  describe('HTTP ContactUs Delete', function () {
    it('DELETE', async function () {
      const serverURL = 'http://localhost:4000'; 
      const contactUsIdToDelete = '65352d659693d2f7663b9396'; 
  
      const res = await chai.request(serverURL)
        .delete(`/api/contactUs/${contactUsIdToDelete}`) 
        .set('Content-Type', 'application/json');
  
      expect(res).to.have.status(200);
      
    });
  });
  
});
