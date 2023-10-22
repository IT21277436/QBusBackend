const ContactUs = require("../models/contactUsModel");
const mongoose = require("mongoose");

const getAllContactUss = async (req, res) => {
  try {
    const contactUss = await ContactUs.find({}).sort({ createdAt: -1 });

    if (!contactUss || contactUss.length === 0) {
      return res.status(404).json({ error: "No data found " });
    }
    res.status(200).json(contactUss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getContactUsDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ContactUs ID" });
    }

    const contactUs = await ContactUs.findById(id);

    if (!contactUs) {
      return res.status(404).json({ error: "No data found" });
    }

    res.status(200).json(contactUs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const createContactUs = async (req, res) => {
  const { email, subject, message, } =
    req.body;

  try {
    const contactUs = await ContactUs.create({
        email, subject, message,
    });
    res.status(200).json(contactUs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteContactUs = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid contactUs ID" });
    }

    const contactUs = await ContactUs.findByIdAndDelete(id);

    if (!contactUs) {
      return res.status(404).json({ error: "No such ContactUs" });
    }

    res.status(200).json(contactUs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const updateContactUsDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ContactUs ID" });
    }

    try {
      // Find the employee by ID and update their details
      const contactUs = await ContactUs.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      if (!contactUs) {
        return res.status(404).json({ error: "Employee not found" });
      }

      res.status(200).json(contactUs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
    const contactUs = await ContactUs.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!contactUs) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json(contactUs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
    createContactUs,
  getAllContactUss,
  getContactUsDetails,
  deleteContactUs,
  updateContactUsDetails,
};
