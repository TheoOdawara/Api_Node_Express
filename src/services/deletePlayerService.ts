import { deletePlayerById } from "../database/playerRepository.js";
import {ok, badRequest} from "../utils/httpHelper.js";


export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await deletePlayerById(id);
    
    if(isDeleted === true){
        response =  await ok("deleted")
    }else{
        response = badRequest()
    };

    return response;
};