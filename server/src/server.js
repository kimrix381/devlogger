import express from "express";
import "dotenv/config";

import { connectdb } from "./db/config.js";
import { studentsrouter } from "./routes/students.js";
import { logsrouter } from "./routes/logs.js";
import { usersrouter } from "./routes/users.js";
import { devicesrouter } from "./routes/devices.js";
import { homeRouter } from "./routes/home.js";

const app = express();

connectdb();

app.use(express.json());

// routes
app.use("/", homeRouter);
app.use("/students", studentsrouter);
app.use("/logs", logsrouter);
app.use("/users", usersrouter);
app.use("/devices", devicesrouter);
app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
