import { Global } from '@emotion/react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ReactNode, useState } from 'react';
import { DrawerProps } from "src/types/ComponentProps";
const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function renderPuller(puller: ReactNode | undefined, open: boolean) {
    if (puller) {
        if (open) {
            return <><Puller />{puller}</>;
        } else {
            return <Puller />;
        }
    } else {
        return <Puller />;
    }
}


function BottomPopDrawer({ open, onClose, onOpen, children, puller }: DrawerProps) {
    return (
        <>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={onClose}
                onOpen={onOpen}
                swipeAreaWidth={0}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        //visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    {renderPuller(puller, open)}
                    {children}
                </StyledBox>
            </SwipeableDrawer>
        </>
    );
}


export default BottomPopDrawer
