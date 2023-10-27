import { AxiosRequestConfig } from 'axios'
import axios from 'axios'
export interface ServiceResponse<T> {
  code: number;
  message: string;
  data: T;
}
export function makeResponse<T>(data: T): ServiceResponse<T> {
  return {
    code: 0,
    message: 'ok',
    data
  }
}
