import { Dispatch, ReactNode, SetStateAction, useState } from "react"

export interface HeaderStates {
    title: string;
}

export interface HeaderStore extends HeaderStates {
    setTitle: Dispatch<SetStateAction<string>>
}

export function HeaderStore(): HeaderStore {
    const [title, setTitle] = useState<string>("文件管理")
    return {
        title,
        setTitle,
    }
}
