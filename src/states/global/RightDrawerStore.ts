import { Dispatch, ReactNode, SetStateAction, useState } from "react"

export interface RightDrawerStates {
    rightDrawerOpen: boolean;
    rightDrawerContent: ReactNode;
}

export interface RightDrawerStore extends RightDrawerStates {
    setRightDrawerOpen: Dispatch<SetStateAction<boolean>>
    setRightDrawerContent: Dispatch<SetStateAction<ReactNode>>
}

export function RightDrawerStore(): RightDrawerStore {
    const [open, setOpen] = useState<boolean>(false)
    const [children, setChildren] = useState<ReactNode>()
    return {
        rightDrawerOpen: open,
        setRightDrawerOpen: setOpen,
        rightDrawerContent: children,
        setRightDrawerContent: setChildren,
    }
}
