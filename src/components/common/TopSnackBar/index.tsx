import { Snackbar, Alert, SlideProps, Slide } from "@mui/material"
import { TopSnackBarProps } from "src/types/ComponentProps"

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="down" />;
}

const TopSnackBar = ({ open, onClose, closeDuration, message, type }: TopSnackBarProps) => {
    return <Snackbar
        TransitionComponent={SlideTransition}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }} open={open} autoHideDuration={closeDuration} onClose={() => onClose && onClose()}>
        <Alert severity={type} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
}
export { TopSnackBar }
