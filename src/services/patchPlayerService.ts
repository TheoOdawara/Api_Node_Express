import { findAndModifyPlayer } from "../database/playerRepository.js";
import type { Players } from "../models/playerModel.js";
import { badRequest, partialContent } from "../utils/httpHelper.js";

export const patchPlayerService = async (id: number, body: Players)=>{
    let response= null;
    const data = await findAndModifyPlayer(id, body);
    if(data){
        response = await partialContent();
    }else{
        response = await badRequest();
    };
    return response
};