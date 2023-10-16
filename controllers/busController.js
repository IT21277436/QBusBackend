const Bus = require("../models/busModel");
const mongoose = require("mongoose");


//get all Busses
const getAllBuses = async (req, res) => {
    const buses = await Bus.find({}).sort({ createdAt: -1 });

    if (!buses){
        return res.status(404).json({ error: "No data found " });
    }

    res.status(200).json(buses);
};

//get a single bus
const getBusDetails = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No data found" });
    }

    const bus = await Bus.findById(id);

    if (!bus) {
        return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(bus);
}

//create new bus
const createBus = async ( req, res) =>{
    const {
        busId,
        licenseNo,
        model,
        make,
        driverId,
        inspectorId,
    } = req.body;
    //add bus to db
    try {
        const bus = await Bus.create({
            busId,
            licenseNo,
            model,
            make,
            driverId,
            inspectorId,
        });
        res.status(200).json(bus);
    } catch (error) {
        res.status(400).json({ error: error.message });
  }
};

//delete a Bus
const deleteBus = async (req, res) =>{
    const { id } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Bus" });
      }

    const bus = await Bus.findByIdAndDelete({ _id: id });

    if (!bus) {
        return res.status(400).json({ error: "No such Bus" });
      }
    
      res.status(200).json(bus);
};

const updateBusDetails = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Bus ID" });
    }
  
    try {
      // Find the bus by ID and update their details
      const bus = await Bus.findByIdAndUpdate({_id: id}, req.body, { new: true });
  
      if (!bus) {
        return res.status(404).json({ error: "Bus not found" });
      }
  
      res.status(200).json(bus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
  
module.exports = {
    createBus,
    getAllBuses,
    getBusDetails,
    deleteBus,
    updateBusDetails,
    // searchEmployees,
};