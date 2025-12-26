import { type Players } from "../models/playerModel.js";


const database: Players[] = [
    {id: 1, name: "Neymar", club: "Brasil"},
    {id: 2, name: "Ronaldo", club: "Brasil"},
    {id: 3, name: "Messi", club: "Barcelona"}
];

export const findAllPLayers = async (): Promise<Players[]> => {
    return database;
};

export const findPlayerById = async(id: number): Promise<Players | undefined> =>{
    return database.find(player => player.id === id);
};