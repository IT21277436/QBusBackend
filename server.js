require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const employeeRoutes = require("./routes/employee");
const routeRoutes = require("./routes/route");
const scheduleRoutes = require("./routes/schedule");
const database = require("./db/database");
const busRoutes = require("./routes/bus");
const ticketRoutes = require("./routes/ticket");
const paymentRoutes = require("./routes/payment");

// express app
const app = express();
app.use(cors());
// middleware
app.use(express.json({ limit: "5mb" }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/ticket", ticketRoutes);
app.use("/api/payment", paymentRoutes);

// connect to db
async function initialize() {
  try {
    await database.connect();
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
initialize();
