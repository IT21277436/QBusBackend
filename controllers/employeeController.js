const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({}).sort({ createdAt: -1 });

    if (!employees || employees.length === 0) {
        return res.status(404).json({ error: "No data found " });
    }
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getEmployeeDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid Employee ID" });
    }

    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}


const createEmployee = async ( req, res) =>{
    const {
        employeeId,
        employeeName,
        nic,
        contactNumber,
        category,
        region,
    } = req.body;

    try {
        const employee = await Employee.create({
            employeeId,
            employeeName,
            nic,
            contactNumber,
            category,
            region,
        });
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
  }
};


const deleteEmployee = async (req, res) =>{
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid Employee ID" });
    }

    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ error: "No such Employee" });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateEmployeeDetails = async (req, res) => {
  
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Employee ID" });
    }

  
    try {
      // Find the employee by ID and update their details
      const employee = await Employee.findByIdAndUpdate({_id: id}, req.body, { new: true });
  
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
  }
  };

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeDetails,
    deleteEmployee,
    updateEmployeeDetails,
   
};