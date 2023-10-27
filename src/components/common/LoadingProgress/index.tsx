import { Box, CircularProgress, Skeleton } from "@mui/material"
import { ReactNode } from "react"
import { LoadingProps } from "src/types/ComponentProps"


const Loading = ({ loading, children }: LoadingProps) => {
    if (loading) {
        return <CircularProgress sx={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'
        }} />
    }
    else {
        return <>{children}</>
    }
}

export default Loading
