import express, {type Request, type Response} from "express";
import router from "./routes/routes.js";
import cors from "cors";

    function createApp(){   
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    const corsOptions = {
        origin:'http://localhost:3000'
    }
    app.use(cors(corsOptions));

    return app;
};

export default createApp;