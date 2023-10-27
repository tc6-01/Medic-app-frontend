import { Dispatch, SetStateAction, useState } from "react"

export interface LoadingStates {
    loading: boolean
}

export interface LoadingStore extends LoadingStates {
    setLoading: Dispatch<SetStateAction<boolean>>
}

export function LoadingStore(): LoadingStore {
    const [loading, setLoading] = useState<boolean>(true)
    return {
        loading,
        setLoading
    }
}
