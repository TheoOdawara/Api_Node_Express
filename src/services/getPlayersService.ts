import {findAllPLayers} from "../database/playerRepository.js";
import {type HttpResponse } from "../models/httpResponseModel.js";
import * as httpResponse from "../utils/httpHelper.js";

export const getPlayerService = async (): Promise<HttpResponse> =>{
    const data = await findAllPLayers();
    let response = null;

    if(!data){
        response = await httpResponse.noContent()
    }else{
        response = await httpResponse.ok(JSON.stringify(data))
    };
    return response;
};

