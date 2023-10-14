const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

//get all Employees
const getAllEmployees = async (req, res) => {
    const employees = await Employee.find({}).sort({ createdAt: -1 });

    if (!employees){
        return res.status(404).json({ error: "No data found " });
    }

    res.status(200).json(employees);
};

//get a single employee
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

//create new employee
const createEmployee = async ( req, res) =>{
    const {
        employeeId,
        employeeName,
        nic,
        contactNumber,
        category,
        region,
    } = req.body;
    //add emp to db
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

//delete a Employee
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
    createEmployee,
    getAllEmployees,
    getEmployeeDetails,
    deleteEmployee,
    updateEmployeeDetails,
    // searchEmployees,
};