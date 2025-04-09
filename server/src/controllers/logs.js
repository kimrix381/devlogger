import { Log } from "../db/models/log.js";
export const createlogs = async (req, res) => {
  const { device, user } = req.body;
  if (!device || !user) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const log = await Log.create({
      device,
      user,
    });
    res.json({ success: true, data: log });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getlogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("device").populate("user");
    res.json({ success: true, data: logs });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updatelogs = (req, res) => {
  res.json({
    message: "PUT /logs",
  });
};

export const deletelogs = (req, res) => {
  res.json({
    message: "DELETE /logs",
  });
};
