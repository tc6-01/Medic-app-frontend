import { FileItemProps, SimpleFileItemProps } from "src/types/ComponentProps"
import { MoreVert } from "@material-ui/icons";
import { FolderOpen } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';


const centerStyle = makeStyles({
    root: {
        '& .MuiGrid-root': {
            display: 'flex',
            alignItems: 'center',
        },
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
        }
    }
})



const SimpleFileItem = ({ fileName }: SimpleFileItemProps) => {
    const center = centerStyle();
    return (
        <Grid container className={center.root} sx={{ justifyContent: 'left', }}>
            <Grid item justifyItems='center' alignItems='center' display={'flex'} mr={2}>
                <FolderOpen fontSize='large' />
            </Grid>
            <Grid item justifyItems='center' alignItems='center' display={'flex'} mr={2}>
                <Typography noWrap variant="h4" color="textPrimary">{fileName}</Typography>
            </Grid>
        </Grid>
    )

}


export default SimpleFileItem
