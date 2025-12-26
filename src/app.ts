import express, {type Request, type Response} from "express";
import { getPlayer } from "./controlers/playersControler.js";
import router from "./routes/routes.js";

    function createApp(){
        
    const app = express();

    app.use(express.json());

    app.use("/api", router);

    return app;
};

export default createApp;