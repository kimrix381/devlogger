import { Student } from "../db/models/student.js";
import { ObjectId } from "mongodb";

export const createstudents = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const student = await Student.create({ name, email, phone });
    res.json({ success: true, data: student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getstudents = async (req, res) => {
  try {
    const students = await Student.find().populate("devices", [
      "model",
      "type",
    ]);

    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    // Get the studentID from the request parameters
    const { studentID } = req.params;

    if (!ObjectId.isValid(studentID)) throw new Error("Invalid ID");

    const student = await Student.findById(studentID).populate("devices", [
      "model",
      "type",
    ]);

    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updatestudent = async (req, res) => {
  try {
    // Get the studentID from the request parameters
    const { studentID } = req.params;

    if (!ObjectId.isValid(studentID)) throw new Error("Invalid ID");

    // Get the data from the request
    const { name, email, phone } = req.body;

    // Validate that data
    if (!name || !email || !phone) {
      // If data is not valid, respond to the client with an error code and message
      throw new Error("All fields are required");
    }

    // If data is valid, update it in the database
    const updatedStudent = await Student.findByIdAndUpdate(
      studentID,
      {
        name,
        email,
        phone,
      },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) throw new Error("Student with that ID does not exist");

    // - Respond to the client with a success code and the data
    res.json({
      success: true,
      data: updatedStudent,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deletestudents = async (req, res) => {
  try {
    // Get the studentID from the request parameters
    const { studentID } = req.params;

    if (!ObjectId.isValid(studentID)) throw new Error("Invalid ID");

    // If data is valid, update it in the database
    await Student.findByIdAndDelete(studentID);

    // - Respond to the client with a success code and the data
    res.status(204).json();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
