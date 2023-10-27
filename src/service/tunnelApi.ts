import axios from 'axios'
import { TunnelDetailInfoResponse, TunnelResponse, Response, Tunnel } from './models'
const getTunnels = async (id?: number): Promise<TunnelResponse> => {
  const res = await axios.get(`/api/tunnel${id === undefined ? '' : '/' + id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const getTunnelDetailInfo = async (id: number): Promise<TunnelDetailInfoResponse> => {
  const res = await axios.get(`/api/tunnel/detail?tunnelId=${id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const addTunnel = async (tunnel: Tunnel): Promise<Response> => {
  const res = await axios.post('/api/tunnel', tunnel, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const updateTunnel = async (tunnel: TunnelResponse): Promise<Response> => {
  const res = await axios.put('/api/tunnel', tunnel, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

// 修改删除接口bug，需要传参id
const deleteTunnel = async (id: number): Promise<Response> => {
  const res = await axios.delete(`/api/tunnel/?id=${id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

export { getTunnels, getTunnelDetailInfo, addTunnel, updateTunnel, deleteTunnel }
