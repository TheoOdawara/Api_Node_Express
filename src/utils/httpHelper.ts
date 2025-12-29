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

export const badRequest = async(): Promise<HttpResponse> => {
    return{
        statusCode: 400,
        body: ""
    };
};

export const created = async(): Promise<HttpResponse> => {
    return{
        statusCode: 201,
        body:"sucessful"
    }
};

export const deleted = async(): Promise<HttpResponse> => {
    return{
        statusCode: 201,
        body:"sucessful"
    }
};

export const accepted = async(): Promise<HttpResponse> => {
    return{
        statusCode: 202,
        body:""
    }
};

export const partialContent = async(): Promise<HttpResponse> => {
    return{
        statusCode: 206,
        body:""
    }
};
