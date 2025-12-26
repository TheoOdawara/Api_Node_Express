import {Router} from "express";
import { getPlayer } from "../controlers/playersControler.js";

const router = Router();


router.get("/players", getPlayer)

export default router;