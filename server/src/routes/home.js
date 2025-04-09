import { Router } from "express";

import { gethome } from "../controllers/home.js";

const homeRouter = Router();

homeRouter.route("/").get(gethome);

export { homeRouter };
