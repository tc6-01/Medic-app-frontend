import { Dispatch, SetStateAction, useState } from "react"

export interface ConfirmDeleteDialogStates {
    confirmDeleteDialogOpen: boolean
}

export interface ConfirmDeleteDialogStore extends ConfirmDeleteDialogStates {
    setConfirmDeleteDialogOpen: Dispatch<SetStateAction<boolean>>
}

export function ConfirmDeleteDialogStore(): ConfirmDeleteDialogStore {
    const [open, setOpen] = useState<boolean>(false)
    return {
        confirmDeleteDialogOpen: open,
        setConfirmDeleteDialogOpen: setOpen
    }
}
