import { findAllClubs } from "../database/clubsRepository.js";
import { badRequest, ok } from "../utils/httpHelper.js";


export const getClubService = async()=>{
    let response = null;
    const data = await findAllClubs();
    if(data){
        response = ok(JSON.stringify(data));
    } else{
        response = badRequest();
    };
    return response;
};