import { Rule } from 'src/types/models/DataModels'

import { Dispatch, SetStateAction, useState } from 'react'

//新建或更新的数据通道
export interface CreatePolicyPageStates {
  policyName: string
  des: string
  userId: Array<[]>
  from: Date | null
  to: Date | null
  url: Array<[]>
  role: string
  count: number
  period: string
  checked: boolean
  rules: Rule[]
  userIdDisplay: boolean
  timeDisplay: boolean
  urlDisplay: boolean
  roleDisplay: boolean
  countDisplay: boolean
  peroidDisplay: boolean
  defaultUserId: string
  defaultUrl: string
}

export interface CreatePolicyPageStore extends CreatePolicyPageStates {
  setPolicyName: Dispatch<SetStateAction<string>>
  setDes: Dispatch<SetStateAction<string>>
  setFrom: Dispatch<SetStateAction<Date>>
  setTo: Dispatch<SetStateAction<Date>>
  setUrl: Dispatch<SetStateAction<Array<[]>>>
  setUserId: Dispatch<SetStateAction<Array<[]>>>
  setRole: Dispatch<SetStateAction<string>>
  setCount: Dispatch<SetStateAction<number>>
  setPeriod: Dispatch<SetStateAction<string>>
  setCheacked: Dispatch<SetStateAction<boolean>>
  setRules: Dispatch<SetStateAction<Rule[]>>
  setUserIdDisplay: Dispatch<SetStateAction<boolean>>
  setTimeDisplay: Dispatch<SetStateAction<boolean>>
  setUrlDisplay: Dispatch<SetStateAction<boolean>>
  setRoleDisplay: Dispatch<SetStateAction<boolean>>
  setCountDisplay: Dispatch<SetStateAction<boolean>>
  setPeroidDisplay: Dispatch<SetStateAction<boolean>>
  setDefaultUserId: Dispatch<SetStateAction<string>>
  setdefaultUrl: Dispatch<SetStateAction<string>>
}

export function CreatePolicyPageStore(): CreatePolicyPageStore {
  const [policyName, setPolicyName] = useState('')
  const [des, setDes] = useState('')
  const [from, setFrom] = useState(new Date('2022-01-01T00:00:00.000Z'))
  const [to, setTo] = useState(new Date('2022-01-01T00:00:00.000Z'))
  const [url, setUrl] = useState([])
  const [role, setRole] = useState('')
  const [count, setCount] = useState(0)
  const [period, setPeriod] = useState('')
  const [userId, setUserId] = useState([])
  const [checked, setCheacked] = useState(true)
  const [userIdDisplay, setUserIdDisplay] = useState(false)
  const [timeDisplay, setTimeDisplay] = useState(false)
  const [urlDisplay, setUrlDisplay] = useState(false)
  const [roleDisplay, setRoleDisplay] = useState(false)
  const [countDisplay, setCountDisplay] = useState(false)
  const [peroidDisplay, setPeroidDisplay] = useState(false)
  // options 数据

  const [rules, setRules] = useState<Rule[]>([])
  const [defaultUserId, setDefaultUserId] = useState('')
  const [defaultUrl, setdefaultUrl] = useState('')
  return {
    policyName,
    setPolicyName,
    des,
    setDes,
    rules,
    setRules,
    from,
    setFrom,
    to,
    setTo,
    url,
    setUrl,
    role,
    setRole,
    count,
    setCount,
    period,
    setPeriod,
    userId,
    setUserId,
    checked,
    setCheacked,
    timeDisplay,
    setTimeDisplay,
    urlDisplay,
    setUrlDisplay,
    roleDisplay,
    setRoleDisplay,
    countDisplay,
    setCountDisplay,
    peroidDisplay,
    setPeroidDisplay,
    userIdDisplay,
    setUserIdDisplay,
    defaultUserId,
    setDefaultUserId,
    defaultUrl,
    setdefaultUrl
  }
}
