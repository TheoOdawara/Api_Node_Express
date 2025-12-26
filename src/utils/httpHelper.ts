import type {HttpResponse} from "../models/httpResponseModel.js";


export const ok = async(data: string): Promise<HttpResponse> =>{
    return{
        statusCode: 200,
        body: data
    };
};

export const noContent = async(): Promise<HttpResponse> => {
    return{
        statusCode: 204,
        body: ""
    };
};