import { Dispatch, ReactNode, SetStateAction, useState } from "react"

export interface BottomDrawerStates {
    bottomDrawerOpen: boolean;
    bottomDrawerContent: ReactNode;
}

export interface BottomDrawerStore extends BottomDrawerStates {
    setBottomDrawerOpen: Dispatch<SetStateAction<boolean>>
    setBottomDrawerContent: Dispatch<SetStateAction<ReactNode>>
}

export function BottomDrawerStore(): BottomDrawerStore {
    const [open, setOpen] = useState<boolean>(false)
    const [children, setChildren] = useState<ReactNode>()
    return {
        bottomDrawerOpen: open,
        setBottomDrawerOpen: setOpen,
        bottomDrawerContent: children,
        setBottomDrawerContent: setChildren,
    }
}
