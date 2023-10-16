const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    if (!Database.instance) {
      this._url = process.env.MONGO_URI;
      this._connection = null;
      Database.instance = this;
    }

    return Database.instance;
  }

  async connect() {
    if (!this._connection) {
      try {
        this._connection = await mongoose.connect(this._url);
        console.log("MongoDB connected successfully");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
      }
    }

    return this._connection;
  }
}

const database = new Database();

module.exports = database;
