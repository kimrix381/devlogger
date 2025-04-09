import { User } from "../db/models/user.js";
export const createusers = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const user = await User.create({ name, email, phone, password });
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getusers = async (req, res) => {
  try {
    const users = await User.find().populate("logs", ["device", "user"]);

    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateusers = (req, res) => {
  res.json({
    message: "PUT /users",
  });
};

export const deleteusers = (req, res) => {
  res.json({
    message: "DELETE /users",
  });
};
