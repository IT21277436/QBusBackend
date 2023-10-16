const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

const Database = require('../../db/database');

describe('Database Class', () => {
  before(async () => {
  
  });

  after(async () => {
    
    await mongoose.connection.close();
  });

  it('should create a new instance of Database', () => {
    const database = new Database();
    expect(database).to.be.an.instanceOf(Database);
  });

  it('should have a connect method', () => {
    const database = new Database();
    expect(database.connect).to.be.a('function');
  });

  it('should connect to the MongoDB database', async () => {
    const database = new Database();
    await database.connect();
    expect(mongoose.connection.readyState).to.equal(1); 
  });

  it('should not reconnect if there is already a connection', async () => {
    const database = new Database();
    await database.connect();
    await database.connect();
    expect(mongoose.connection.readyState).to.equal(1); 
  });

  it('should handle connection errors', async () => {
    
    const database = new Database();

    try {
      
      database._url = 'invalid-url';
      await database.connect();
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });
});
