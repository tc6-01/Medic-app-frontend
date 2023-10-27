import { LoginResultResponse, Response } from './models';
import axios from "axios";
import { ServiceResponse } from './types';

const login = async (userName: string, passWord: string): Promise<ServiceResponse<LoginResultResponse>> => {
    const res = await axios.post('/login', { userName, passWord })
    return res.data
}

const register = async (userName: string, passWord: string): Promise<Response> => {
    const res = await axios.post('/api/user/register', {}, { params: { userName, passWord } })
    return res.data
}

export { login, register };
