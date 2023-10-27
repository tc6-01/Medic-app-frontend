// 解决返回时报错
export interface ServiceResponse<T> {
    code: number;
    msg: string;
    status:number,
    message:string,
    data: T;
}
export function makeResponse<T>(data: T): ServiceResponse<T> {
    return {
        code: 200,
        message:'ok',
        status:0,
        msg: 'ok',
        data
    }
}




