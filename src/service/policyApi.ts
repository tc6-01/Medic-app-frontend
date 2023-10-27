import axios, { AxiosRequestConfig } from 'axios'
import { Rule } from 'src/types/models/DataModels'
import { Policy, PolicyDataResponse, PolicyIEnumerableDataResponse } from './models'

const getPolicies = async (): Promise<PolicyDataResponse | PolicyIEnumerableDataResponse> => {
  const res = await axios.get('/api/policy', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
  return res.data
}

const getPolicyById = async (id: string): Promise<PolicyDataResponse> => {
  const res = await axios.get(`/api/policy?objectId=${id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const addPolicy = async (policy: Policy): Promise<Response> => {
  const res = await axios.post('/api/policy', policy, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const updatePolicyRules = async (id: string, Rules: Rule[]): Promise<Response> => {
  const res = await axios.put(`/api/policy?objectId=${id}`, Rules, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

const deletePolicy = async (id: string): Promise<Response> => {
  const res = await axios.delete(`/api/policy?objectId=${id}`, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  })
  return res.data
}

export { getPolicies, getPolicyById, addPolicy, updatePolicyRules, deletePolicy }
