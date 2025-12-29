import { type Players } from "../models/playerModel.js";
import playerRepository from "../database/playerRepository.json" with { type: "json" }

const database = playerRepository;

export const findAllPLayers = async (): Promise<Players[]> => {
    return database;
};

export const findPlayerById = async(id: number): Promise<Players | undefined> =>{
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: Players)=>{
    database.push(player);
}; 

export const deletePlayerById = async(id:number) => {
    const index = database.findIndex(p => p.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true
    }else{
        return false
    }
    
};

export const findAndModifyPlayer = async(id:number, body: Players) => {
    const index = database.findIndex(p => p.id === id);
    if(index !== -1){
        database[index] = body;
    };
    return database[index];
};