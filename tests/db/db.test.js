// const mongoose = require('mongoose');
// const chai = require('chai');
// const expect = chai.expect;

// describe('Database Connection', () => {
//   it('should connect to the database', (done) => {
//     // Use your MONGO_URI from the environment variables or set it here
//     const mongoURI = 'mongodb+srv://it21217586:QBus123@qbus.dkzvrvu.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MONGO_URI

//     mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });

//     const db = mongoose.connection;

//     db.on('error', (error) => {
//       console.error('Database connection error:', error);
//       done(error);
//     });

//     db.once('open', () => {
//       console.log('Connected to the database');
//       // You can add more assertions here if needed
//       expect(db.readyState).to.equal(1); // 1 means connected
//       done();
//     });
//   });

//   after((done) => {
//     // Close the database connection after all tests
//     mongoose.connection.close(() => done());
//   });
// });
