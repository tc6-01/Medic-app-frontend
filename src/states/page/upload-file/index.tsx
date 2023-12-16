import { Dispatch, SetStateAction, useState } from "react"

// 新建数据通道
export interface UploadPageStstes {
    owner: string
    // 添加文件类型
    file: File
}

export interface UploadPageStore extends UploadPageStstes {
    // 写出上述的每个set方法
    setOwner:Dispatch<SetStateAction<string>>;
    setFile:Dispatch<SetStateAction<File>>;
}

export function UploadPageStore(): UploadPageStore {
    const [owner, setOwner] = useState<string>('')
    const [file, setFile] = useState<File>(null)
    return {
        owner,
        file,
        setOwner,
        setFile
    }
}
