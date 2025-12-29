import { insertPlayer } from "../database/playerRepository.js";
import type { Players } from "../models/playerModel.js";
import * as httpResponse from "../utils/httpHelper.js";


export const createPlayerService = async(player: Players)=>{
    let response = null;
    if(Object.keys(player).length !== 0){
        response = await insertPlayer(player);
        return httpResponse.created();
    } else{
        response= httpResponse.badRequest();
    };
    return response;
};