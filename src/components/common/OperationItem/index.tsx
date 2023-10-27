import { FileItemProps, GroupItemProps, OperationItemProps } from "src/types/ComponentProps"
import { MoreVert } from "@material-ui/icons";
import { FolderOpen } from '@mui/icons-material';
import { Avatar, Box, Button, Grid, Stack, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';


const centerStyle = makeStyles({
    root: {
        '& .MuiGrid-root': {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
        }
    }
})
const OperationItem = ({ icon, name, onclick }: OperationItemProps) => {
    const center = centerStyle();
    return (
        <IconButton onClick={() => onclick?.call(onclick)} className={center.root} sx={{ width: '100%' }}>
            <Grid container>
                <Grid item xs={3}>
                    {icon}
                </Grid>
                <Grid item >
                    <Typography fontWeight={'bold'} fontSize={17} noWrap>{name}</Typography>
                </Grid>
            </Grid>
        </IconButton >
    )
}


export default OperationItem
