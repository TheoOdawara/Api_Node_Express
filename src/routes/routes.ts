import {Router} from "express";
import * as playerControler from "../controlers/playersControler.js";

const router = Router();


router.get("/players", playerControler.getPlayer)

router.get("/players/:id", playerControler.getPlayerById)

export default router;