const Routes = require("../models/RouteModel");
const mongoose = require("mongoose");

const getAllRoutes = async (req, res) => {
  try {
    const routes = await Routes.find({}).sort({ createdAt: -1 });

    if (!routes|| routes.length === 0){
        return res.status(404).json({ error: "No data found " });
    }
    res.status(200).json(routes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getRouteDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No data found" });
    }

    const route = await Routes.findById(id);

    if (!route) {
        return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(route);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

const createRoute = async ( req, res) =>{
    const {
        routeNumber,
        routeName,
        distance,
        totalBusFare,
        schedules,
    } = req.body;

    try {
        const route = await Routes.create({
            routeNumber,
            routeName,
            distance,
            totalBusFare,
            schedules,
        });
        res.status(200).json(route);
    } catch (error) {
        res.status(400).json({ error: error.message });
  }
};

const deleteRoute = async (req, res) =>{
  try {
    const { id } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Route" });
      }

    const route = await Routes.findByIdAndDelete({ _id: id });

    if (!route) {
        return res.status(400).json({ error: "No such Route" });
      }
    
      res.status(200).json(route);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
};

const updateRouteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Route ID" });
    }
  
    try {

      const route = await Routes.findByIdAndUpdate({_id: id}, req.body, { new: true });
  
      if (!route) {
        return res.status(404).json({ error: "Employee not found" });
      }
  
      res.status(200).json(route);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
  };
  

module.exports = {
    createRoute,
    getAllRoutes,
    getRouteDetails,
    deleteRoute,
    updateRouteDetails,
};