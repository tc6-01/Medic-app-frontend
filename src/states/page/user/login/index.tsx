import { Dispatch, SetStateAction, useState } from "react"

// 新建数据通道
export interface LoginPageStates {
    passWord: string
    userName: string
    showPassword: boolean
}

export interface LoginPageStore extends LoginPageStates {
    setPassWord: Dispatch<SetStateAction<string>>;
    setUserName: Dispatch<SetStateAction<string>>;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export function LoginPageStore(): LoginPageStore {
    const [passWord, setPassWord] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return {
        passWord,
        userName,
        showPassword,
        setPassWord,
        setUserName,
        setShowPassword
    }
}
