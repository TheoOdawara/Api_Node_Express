import { findPlayerById } from "../database/playerRepository.js"; 
import * as httpResponse from "../utils/httpHelper.js";

export const getPlayerByIdService = async(id: number) =>{
    const data = await findPlayerById(id);
    let response = null;

    if(data){
        response = httpResponse.ok(JSON.stringify(data));
    }else{
        response = httpResponse.noContent();
    };
    return response;
};