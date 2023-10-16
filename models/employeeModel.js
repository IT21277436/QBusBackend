const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        employeeId: {
            type: String,
            required: true,
        },
        employeeName: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            default: null,
        },
        category: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);


// Implementing the Active Record Pattern
employeeSchema.statics.getAllEmployees = async function () {
    return this.find({}).sort({ createdAt: -1 });
  };
  
  employeeSchema.statics.getEmployeeById = async function (id) {
    return this.findById(id);
  };
  
  employeeSchema.statics.createEmployee = async function (employeeData) {
    return this.create(employeeData);
  };
  
  employeeSchema.statics.deleteEmployee = async function (id) {
    return this.findByIdAndDelete(id);
  };
  
  employeeSchema.statics.updateEmployee = async function (id, employeeData) {
    return this.findByIdAndUpdate(id, employeeData, { new: true });
  };
  

module.exports = mongoose.model("Employee",employeeSchema);