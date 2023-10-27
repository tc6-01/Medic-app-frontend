import { SwipeableDrawer } from "@mui/material"
import { DrawerProps } from "src/types/ComponentProps"

const RightDrawer = ({ open, onClose, onOpen, children }: DrawerProps) => {
    return <SwipeableDrawer
        sx={{ p: 1 }}
        anchor={'right'}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
    >
        {children}
    </SwipeableDrawer>
}

export { RightDrawer }
