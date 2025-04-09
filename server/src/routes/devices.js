import { Router } from "express";

import {
  createdevices,
  deletedevices,
  getdevices,
  updatedevices,
  getsingledevice,
} from "../controllers/devices.js";

const devicesrouter = Router();

devicesrouter.route("/").get(getdevices).post(createdevices);

devicesrouter
  .route("/:deviceID")
  .get(getsingledevice)
  .put(updatedevices)
  .delete(deletedevices);

export { devicesrouter };
