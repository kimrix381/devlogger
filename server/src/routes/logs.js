import { Router } from "express";

import {
  createlogs,
  deletelogs,
  getlogs,
  updatelogs,
} from "../controllers/logs.js";

const logsrouter = Router();

logsrouter
  .route("/")
  .post(createlogs)
  .get(getlogs)
  .put(updatelogs)
  .delete(deletelogs);

export { logsrouter };
