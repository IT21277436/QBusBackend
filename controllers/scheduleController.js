const Routes = require("../models/RouteModel");
const Schedule  = require("../models/ScheduleModel");
const mongoose = require("mongoose");

//get all routes
const getAllRoutes = async (req, res) => {
  const routes = await Routes.find({}).sort({ createdAt: -1 });

  if (!routes){
      return res.status(404).json({ error: "No data found " });
  }

  res.status(200).json(routes);
};

const getschedulesDetails = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({ error: "No data found" });
  }

  const route = await Routes.findById(id);

  if (!route) {
      return res.status(404).json({ error: "No data found" });
  }

  res.status(200).json(route);
}

const getAllSchedules = async (req, res) => {
    const schedules = await Schedule.find({}).sort({ createdAt: -1 });

    if (!schedules){
        return res.status(404).json({ error: "No data found " });
    }

    res.status(200).json(schedules);
};

const getScheduleDetails = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No data found" });
    }

    const schedule = await Schedule.findById(id);

    if (!schedule) {
        return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(schedule);
}

const createSchedule = async ( req, res) =>{
    const {
        routeNumber,
        busId,
        driverId,
        departureTime,
        arrivalTime,
        frequency,
    } = req.body;
    //add schedule to db
    try {
        const schedule = await Schedule.create({
            routeNumber,
            busId,
            driverId,
            departureTime,
            arrivalTime,
            frequency,
        });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(400).json({ error: error.message });
  }
};

const deleteSchedule = async (req, res) =>{
    const { id } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Schedule" });
      }

    const schedule = await Schedule.findByIdAndDelete({ _id: id });

    if (!schedule) {
        return res.status(400).json({ error: "No such Schedule" });
      }
    
      res.status(200).json(schedule);
};

const updateScheduleDetails = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Schedule ID" });
    }
  
    try {

      const schedule = await Schedule.findByIdAndUpdate({_id: id}, req.body, { new: true });
  
      if (!schedule) {
        return res.status(404).json({ error: "Schedule not found" });
      }
  
      res.status(200).json(schedule);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };

module.exports = {
    createSchedule,
    getAllSchedules,
    getScheduleDetails,
    deleteSchedule,
    updateScheduleDetails,
};



