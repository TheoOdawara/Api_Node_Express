import clubRespository from "../database/clubRepository.json" with { type: "json" }
import type { ClubModel } from "../models/clubModel.js";


const database = clubRespository; 

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
};