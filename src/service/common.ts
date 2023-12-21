import { AxiosRequestConfig } from 'axios'
import axios from 'axios'
export interface ServiceResponse<T> {
  code: number;
  msg: string;
  data: T;
}
export function makeResponse<T>(data: T): ServiceResponse<T> {
  return {
    code: 0,
    msg: 'ok',
    data
  }
}
