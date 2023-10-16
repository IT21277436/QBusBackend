const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../../server'); 
const User = require('../../models/userModel'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Controller', () => {
 
  before((done) => {
    mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once('open', () => done());
  });

  after((done) => {
    mongoose.connection.close(() => done());
  });

  
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('User Registration', () => {
    it('should create a new user', async () => {
      const newUser = {
        email: 'newuser@example.com',
        password: 'password123',
        confirmpassword: 'password123',
        mobile: '1234567890',
      };

      const res = await chai.request(app).post('/api/signup').send(newUser);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('email', newUser.email);
      expect(res.body).to.have.property('id');
    });

    it('should return a 400 error if required fields are missing', async () => {
      const invalidUser = {
        password: 'password123',
        confirmpassword: 'password123',
      };

      const res = await chai.request(app).post('/api/signup').send(invalidUser);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });

    it('should return a 400 error if email is invalid', async () => {
      const invalidUser = {
        email: 'invalid-email',
        password: 'password123',
        confirmpassword: 'password123',
        mobile: '1234567890',
      };

      const res = await chai.request(app).post('/api/signup').send(invalidUser);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });
  });

  describe('User Login', () => {
    it('should login a user with valid credentials', async () => {
      const user = {
        email: 'testuser@example.com',
        password: 'testpassword',
      };

    
      await User.create(user);

      const res = await chai.request(app).post('/api/login').send(user);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('email', user.email);
      expect(res.body).to.have.property('id');
    });

    it('should return a 400 error if email is incorrect', async () => {
      const invalidUser = {
        email: 'invalid@example.com',
        password: 'testpassword',
      };

      const res = await chai.request(app).post('/api/login').send(invalidUser);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });

    it('should return a 400 error if password is incorrect', async () => {
      const invalidUser = {
        email: 'testuser@example.com',
        password: 'invalidpassword',
      };

      const res = await chai.request(app).post('/api/login').send(invalidUser);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });
  });

  
});
