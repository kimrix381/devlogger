import { Device } from "../db/models/device.js";
import { Student } from "../db/models/student.js";
import { ObjectId } from "mongodb";

export const createdevices = async (req, res) => {
  const { model, type, color, student } = req.body;
  if (!model || !type || !color) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const device = await Device.create({ model, type, color, student });
    res.json({ success: true, data: device });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getdevices = async (req, res) => {
  try {
    const devices = await Device.find().populate("student").populate("logs");
    res.json({ success: true, data: devices });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getsingledevice = async (req, res) => {
  try {
    const { deviceID } = req.params;
    if (!ObjectId.isValid(deviceID)) throw new Error("Invalid ID");
    const device = await Device.findById(deviceID)
      .populate("student")
      .populate("logs");
    if (!device) throw new Error("Device not found");
    res.json({
      success: true,
      data: device,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatedevices = async (req, res) => {
  try {
    const { deviceID } = req.params;
    if (!ObjectId.isValid(deviceID)) throw new Error("Invalid ID");
    const { model, type, color, student } = req.body;
    if (!model || !type || !color) {
      throw new Error("All fields are required");
    }
    const device = await Device.findByIdAndUpdate(deviceID, {
      model,
      type,
      color,
      student,
    });

    if (!device) throw new Error("Device not found");

    res.json({
      success: true,
      data: device,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deletedevices = async (req, res) => {
  try {
    const { deviceID } = req.params;

    if (!ObjectId.isValid(deviceID)) throw new Error("Invalid ID");

    const device = await Device.findByIdAndDelete(deviceID);

    if (!device) throw new Error("Device not found");

    res.json({
      success: true,
      message: "Device deleted",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
