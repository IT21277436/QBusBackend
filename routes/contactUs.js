const express = require("express");
const{
    createContactUs,
  getAllContactUss,
  getContactUsDetails,
  deleteContactUs,
  updateContactUsDetails,
    // searchEmployees,
} = require("../controllers/contactUsController");

const router = express.Router();

//get all employee
router.get("/", getAllContactUss);

//get a single employee
router.get("/:id", getContactUsDetails);

//POST a new employee
router.post("/", createContactUs);

//DELETE a employee
router.delete("/:id", deleteContactUs);

//UPDATE a employee
router.put("/:id", updateContactUsDetails);

// Search employees based on criteria
// router.post("/search", searchEmployees);

module.exports = router;