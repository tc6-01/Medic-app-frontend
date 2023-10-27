import { Dispatch, SetStateAction, useState } from "react"

// 新建数据通道
export interface RegisterWindowStates {
    passWord: string
    userName: string
    repetePassword: string
    showPassword: boolean
}

export interface RegisterWindowStore extends RegisterWindowStates {
    setPassWord: Dispatch<SetStateAction<string>>;
    setUserName: Dispatch<SetStateAction<string>>;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    setRepetePassword: Dispatch<SetStateAction<string>>;
}

export function RegisterWindowStore(): RegisterWindowStore {
    const [passWord, setPassWord] = useState<string>('')
    const [repetePassword, setRepetePassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return {
        passWord,
        userName,
        showPassword,
        setPassWord,
        repetePassword,
        setRepetePassword,
        setUserName,
        setShowPassword
    }
}
