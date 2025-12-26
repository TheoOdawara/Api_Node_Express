
interface HttpResponse{
    statusCode: number;
    body: string;
};

export const ok = async (data: string): Promise<HttpResponse> =>{
    return{
        statusCode: 200,
        body: data
    };
};