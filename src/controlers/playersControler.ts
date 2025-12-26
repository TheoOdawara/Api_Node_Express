import {type Request,type Response } from "express";
import { getPlayerById } from "../services/getPlayersById.js";
import { ok } from "../utils/httpHelper.js";

export const getPlayer = async (req: Request, res: Response) => {
    const data = JSON.stringify(await getPlayerById());
    const response = await ok(data);

   res.status(response.statusCode).json(response.body)
};