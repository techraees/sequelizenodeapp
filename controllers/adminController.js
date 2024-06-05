// app/controllers/adminController.js
const Admin = require('../models/Admin');

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newAdmin = await Admin.create({ username, password });
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Implement other CRUD operations as needed
