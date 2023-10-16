// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const mongoose = require('mongoose');
// const app = require('../../server'); // Import your Express app
// const expect = chai.expect;

// chai.use(chaiHttp);

// describe('Express App', () => {
//   // Connect to the test database before running any tests
//   before((done) => {
//     mongoose.connect('mongodb+srv://it21217586:QBus123@qbus.dkzvrvu.mongodb.net/?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//     mongoose.connection.once('open', () => done());
//   });

//   // Disconnect from the test database after all tests have run
//   after((done) => {
//     mongoose.connection.close(() => done());
//   });

//   // Clear the database collections before each test
//   beforeEach(async () => {
//     await mongoose.connection.dropDatabase();
//   });

//   describe('API Endpoints', () => {
//     it('should return a 200 status for /api/user', (done) => {
//       chai.request(app)
//         .get('/api/user')
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });

//     it('should create a new user via POST request to /api/user', (done) => {
//       const newUser = {
//         // Your user data here
//       };

//       chai.request(app)
//         .post('/api/user')
//         .send(newUser)
//         .end((err, res) => {
//           expect(res).to.have.status(201); // Assuming it returns 201 for successful creation
//           done();
//         });
//     });

//     it('should return a 404 status for unknown routes', (done) => {
//       chai.request(app)
//         .get('/api/nonexistent')
//         .end((err, res) => {
//           expect(res).to.have.status(404);
//           done();
//         });
//     });
//   });

//   // Add more test cases for different routes and scenarios
// });
