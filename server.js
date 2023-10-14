require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const userRoutes = require('./routes/user')
const employeeRoutes = require('./routes/employee')

// express app
const app = express()
app.use(cors());
// middleware
app.use(express.json({limit: '5mb'}))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/employee', employeeRoutes)
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })