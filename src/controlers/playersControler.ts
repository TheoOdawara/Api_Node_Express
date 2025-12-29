import {type Request,type Response } from "express";
import {getPlayerService} from "../services/getPlayersService.js";
import { getPlayerByIdService } from "../services/getPlayerByIdService.js";
import {createPlayerService} from "../services/postPlayerService.js";
import type { PlayerParams } from "../models/paramsModel.js";
import { deletePlayerService } from "../services/deletePlayerService.js";
import type { Players } from "../models/playerModel.js";
import { patchPlayerService } from "../services/patchPlayerService.js";
import { badRequest } from "../utils/httpHelper.js";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    return res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const getPlayerById = async (req: Request<PlayerParams>, res: Response)=> {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async(req:Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue);
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }else{
        const response = badRequest();
        res.status((await response).statusCode)
    }; 
};

export const deletePLayer = async(req: Request<PlayerParams>, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async(req: Request<PlayerParams>, res: Response) =>{
    const id = parseInt(req.params.id);
    const bodyValue: Players = req.body;
    const httpResponse = await patchPlayerService(id, bodyValue);
    return res.status(httpResponse.statusCode);
};