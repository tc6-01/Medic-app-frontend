import axios from "axios";
import { ServiceResponse } from "./common";
import { FileItemData } from "src/types/ComponentProps";
import { number } from 'prop-types';

/**
 * 
 * @export
 * @interface ShareParam
 */
export interface ShareParam {
    /**
     * 
     * @type {string}
     * @memberof ShareParam
     */
    fileName: string;
    // 共享策略名称
    name:string;
    // 共享策略描述
    desc:string;

    /**
     * 
     * @type {string}
     * @memberof ShareParam
     */
    target: string;
    /**
     * 
     * @type {number}
     * @memberof ShareParam
     */
    expire: number;
    /**
     * 
     * @type {number}
     * @memberof ShareParam
     */
    useLimit: number;
    isAllow:number;
}



/**
 * 
 * @export
 * @interface SharedFile
 */
export interface SharedFile {
    id : number;
    /**
     * 
     * @type {string}
     * @memberof SharedFile
     */
    fileName: string;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof SharedFile
     */
    target: string;
    from:string;
    owner:string;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    expire: number;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    useLimit: number;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    use: number;
        /*
    * 确认是否可以被共享
    */
    isAllow:number;
}
export interface BeSharedFile {
    id :number;
    /**
     * 
     * @type {string}
     * @memberof SharedFile
     */
    fileName: string;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof SharedFile
     */
    from: string;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    expire: number;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    useLimit: number;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    use: number;
    /*
    * 确认是否可以被共享
    */
    isAllow:number;
}
export interface LoginResult {
    token: string
    isAdmin : number
}
export interface Login {
    username: string
    password: string
}

export interface Regitser{
    username: string,
    password: string,
    retry_password: string
}

export interface CommonFile {
    fileName: string,
    owner: string,
    expire: number,
    use: number,
    useLimit: number,
    fileSize: number,
        /*
    * 确认是否可以被共享
    */
    isAllow:number;
}

export function FileToFileItemData(idx: number, item: CommonFile): FileItemData {
    const owner = localStorage.getItem('username')
    return {
        id: idx,
        fileName: item.fileName,
        size: item.fileSize,
        state: owner == item.owner ? 'owned' : 'fromShared',
        owner: item.owner,
        isAllow: item.isAllow,
        use: item.use,
        useLimit: item.useLimit,
        expire: item.expire
    }
}
export function SharedFileToFileItemData(idx: number, item: SharedFile): FileItemData {
    const owner = localStorage.getItem('username')
    return {
        id: idx,
        fileName: item.fileName,
        size: item.fileSize,
        state: owner == item.target ? 'owned' : 'fromShared',
        owner: item.target,
        isAllow: item.isAllow,
        use: item.use,
        useLimit: item.useLimit,
        expire: item.expire
    }
}
/**
 *
 * @export
 * @interface LoginResultResponse
 */
export const login = async (userName: string, passWord: string): Promise<ServiceResponse<LoginResult>> => {
    const res = await axios.post('/user/login', {"username" : userName, "password":passWord })
    return res.data
}

export const register = async (userName: string, passWord: string, repeatPass: string) =>{
    const res = await axios.post('/user/register', {"username" : userName, "password":passWord ,"retry_password":repeatPass})
    return res.data
}
/**
 *
 * @export
 * @interface LoginResultResponse
 */
export const getFileList = async (): Promise<ServiceResponse<Array<CommonFile>>> => {
    const res = await axios.get('/file/list', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
export const getUserList = async (): Promise<ServiceResponse<Array<string>>> => {
    const res = await axios.get('/user/list', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}

/**
 *
 * @export
 * @interface LoginResultResponse
 */
// 
export const shareFile = async (param: ShareParam): Promise<ServiceResponse<undefined>> => {
    const res = await axios.post('/user/share', param, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
// 获取分享出去的文件列表
export const myShareFile = async (): Promise<ServiceResponse<Array<SharedFile>>> => {
    const res = await axios.get('/file/share', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
// 获取当前用户被共享病历
export const myBeShareFile = async (): Promise<ServiceResponse<Array<BeSharedFile>>> => {
    const res = await axios.get('/file/be-share', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}

// 根据文件名称下载文件
export const downloadFile = async (fileName: string): Promise<any> => {
    const res = await axios.get(`/file/download?filename=${fileName}`, { responseType: 'blob', headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
export const uploadFile = async(param:FormData): Promise<any>=>{
    const res = await axios.post(`/admin/upload`,param,{headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
    return res.data
}
export const deleteSharingFile = async (id:number) => {
    const res = await axios.get(`/file/shareDelete?id=${id}`,{headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
    return res.data
}
