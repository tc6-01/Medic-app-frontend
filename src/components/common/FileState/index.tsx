import { FileStateProps } from "src/types/ComponentProps";
import { makeStyles } from '@material-ui/core';
import { Share } from "@material-ui/icons";
import { IosShare } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';


const centerStyle = makeStyles({
    root: {
        maxWidth: 300,
        '& .MuiGrid-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
        },
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
        }
    }
})

const stateMap: any = {
    'shared': ['已共享', <Share fontSize="small" />, 'green'],
    'fromShared': ['来自共享', <IosShare fontSize="small" />, 'purple'],
    'owned': [null, null, 'black']
}

const FileState = ({ state }: FileStateProps) => {
    const center = centerStyle();
    return (
        <Grid container className={center.root}>
            <Grid item color={stateMap[state][2]}>
                {stateMap[state][1]}
            </Grid>
            <Grid item color={stateMap[state][2]}>
                <Typography fontSize={12}>{stateMap[state][0]}</Typography>
            </Grid>
        </Grid>
    )

}


export default FileState
