import { Router } from "express";

import {
  createstudents,
  deletestudents,
  getstudents,
  updatestudent,
  getSingleStudent,
} from "../controllers/students.js";

const studentsrouter = Router();

studentsrouter.route("/").post(createstudents).get(getstudents);

studentsrouter
  .route("/:studentID")
  .get(getSingleStudent)
  .put(updatestudent)
  .delete(deletestudents);

export { studentsrouter };
