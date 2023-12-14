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
    /**
     * 
     * @type {boolean}
     * @memberof ShareParam
     */
    isGroup: boolean;
}

/**
 * 
 * @export
 * @interface SharedFile
 */
export interface SharedFile {
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
     * @type {boolean}
     * @memberof SharedFile
     */
    isGroup: boolean;
    /**
     * 
     * @type {number}
     * @memberof SharedFile
     */
    use: number;
}

export interface LoginResult {
    token: string
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

export interface File {
    fileName: string,
    owner: string,
    expire: number,
    use: number,
    useLimit: number,
    fileSize: number
}

export function FileToFileItemData(idx: number, item: File): FileItemData {
    const owner = localStorage.getItem('username')
    return {
        id: idx,
        name: item.fileName,
        size: item.fileSize,
        state: owner == item.owner ? 'owned' : 'fromShared',
        owner: item.owner,
        use: item.use,
        useLimit: item.useLimit,
        expire: item.expire
    }
}
export function SharedFileToFileItemData(idx: number, item: SharedFile): FileItemData {
    const owner = localStorage.getItem('username')
    return {
        id: idx,
        name: item.fileName,
        size: item.fileSize,
        state: owner == item.target ? 'owned' : 'fromShared',
        owner: item.target,
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
    console.log(res)
    return res.data
}
/**
 *
 * @export
 * @interface LoginResultResponse
 */
export const getFileList = async (): Promise<ServiceResponse<Array<File>>> => {
    const res = await axios.get('/file', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
export const getUserList = async (): Promise<ServiceResponse<Array<string>>> => {
    const res = await axios.get('/user', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}

/**
 *
 * @export
 * @interface LoginResultResponse
 */
// 获取分享出去的文件列表
export const shareFile = async (param: ShareParam): Promise<ServiceResponse<undefined>> => {
    const res = await axios.post('/file/share', param, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
// 获取数据
export const myShareFile = async (): Promise<ServiceResponse<Array<SharedFile>>> => {
    const res = await axios.get('/file/share', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
// 根据文件名称下载文件
export const downloadFile = async (fileName: string): Promise<any> => {
    const res = await axios.get(`/file/download?filename=${fileName}`, { responseType: 'blob', headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    return res.data
}
