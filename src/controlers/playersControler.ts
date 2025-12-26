import {type Request,type Response } from "express";
import { getPlayerService } from "../services/getPlayersService.js";
import { getPlayerByIdService } from "../services/getPlayerByIdService.js";
import type { PlayerParams } from "../models/paramsModel.js";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    return res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const getPlayerById = async (req: Request<PlayerParams>, res: Response)=> {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};