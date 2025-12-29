import { type Request, type Response } from "express";
import { getClubService } from "../services/clubsServices.js";


export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await getClubService();
    return res.status(httpResponse.statusCode).json(httpResponse.body)
};