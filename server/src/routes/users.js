import { Router } from "express";

import {
  createusers,
  deleteusers,
  getusers,
  updateusers,
} from "../controllers/users.js";

const usersrouter = Router();

usersrouter
  .route("/")
  .post(createusers)
  .get(getusers)
  .put(updateusers)
  .delete(deleteusers);

export { usersrouter };
