import {Router} from "express";
import * as playerControler from "../controlers/playersControler.js";
import * as clubsControler from "../controlers/clubsControler.js"

const router = Router();

//Gets
router.get("/players", playerControler.getPlayer);
router.get("/players/:id", playerControler.getPlayerById);
router.get("/clubs", clubsControler.getClubs)

//Posts
router.post("/players", playerControler.postPlayer);

//Deletes
router.delete("/players/:id", playerControler.deletePLayer);

//Patch
router.patch("/players/:id", playerControler.updatePlayer)


export default router;