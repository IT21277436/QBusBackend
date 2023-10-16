const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

<<<<<<< Updated upstream
//get all Employees
=======
>>>>>>> Stashed changes
const getAllEmployees = async (req, res) => {
    const employees = await Employee.find({}).sort({ createdAt: -1 });

    if (!employees){
        return res.status(404).json({ error: "No data found " });
    }

    res.status(200).json(employees);
};

const getEmployeeDetails = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No data found" });
    }

    const employee = await Employee.findById(id);

    if (!employee) {
        return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(employee);
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
<<<<<<< Updated upstream
    //add emp to db
=======
    

>>>>>>> Stashed changes
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
    const { id } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Employee" });
      }

    const employee = await Employee.findByIdAndDelete({ _id: id });

    if (!employee) {
        return res.status(400).json({ error: "No such Employee" });
      }
    
      res.status(200).json(employee);
};

const updateEmployeeDetails = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Employee ID" });
    }
<<<<<<< Updated upstream
  
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
=======

   
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
>>>>>>> Stashed changes
    }
  };

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeDetails,
    deleteEmployee,
    updateEmployeeDetails,
   
};