import {type Request,type Response } from "express";

export const getPlayer = (req: Request, res: Response)=> {
    res.status(200).json({player: "Neymar"})
};