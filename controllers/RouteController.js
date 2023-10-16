const Routes = require("../models/RouteModel");
const mongoose = require("mongoose");

//get all routes
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

//get a single route
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

//create new route
const createRoute = async ( req, res) =>{
    const {
        routeNumber,
        routeName,
        distance,
        totalBusFare,
        schedules,
    } = req.body;
    //add emp to db
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

//delete a route
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

// Update route details
const updateRouteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Route ID" });
    }
  
    try {
      // Find the employee by ID and update their details
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

//   const searchEmployees = async (req, res) => {
//     try {
//       // Define the search criteria based on the request body
//       const searchCriteria = req.body;
  
//       // Perform the search using the find method with the search criteria
//       const employees = await Employee.find(searchCriteria).sort({ createdAt: -1 });
  
//       if (!employees || employees.length === 0) {
//         return res.status(404).json({ error: "No matching employees found" });
//       }
  
//       res.status(200).json(employees);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Server error" });
//     }
//   };

  

module.exports = {
    createRoute,
    getAllRoutes,
    getRouteDetails,
    deleteRoute,
    updateRouteDetails,
};