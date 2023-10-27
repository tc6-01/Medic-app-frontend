import { Dispatch, SetStateAction, useState } from "react";

type SnackBarType = "success" | "error" | "warning" | "info";

export interface SnackBarStates {
    snackBarOpen: boolean;
    snackBarMessage: string;
    snackBarType: SnackBarType;
}

export interface SnackBarStore extends SnackBarStates {
    setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
    setSnackBarMessage: Dispatch<SetStateAction<string>>;
    setSnackBarType: Dispatch<SetStateAction<SnackBarType>>;
}

export function SnackBarStore(): SnackBarStore {
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>("");
    const [snackBarType, setSnackBarType] = useState<SnackBarType>("success");
    return {
        snackBarOpen,
        snackBarMessage,
        snackBarType,
        setSnackBarOpen,
        setSnackBarMessage,
        setSnackBarType
    }
}
