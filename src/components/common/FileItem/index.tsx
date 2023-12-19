import { FileItemProps } from "src/types/ComponentProps";
import { FileOpen } from '@mui/icons-material';
import { Avatar, Grid, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const FileItem = ({ fileName, fileSize, fileTime, sharedContent, onOperationClicked, remainUse }: FileItemProps) => {
    const theme = useTheme();
    const navi = useNavigate()
    // const secondaryAction =
    //     <Box display={'flex'} flexWrap='nowrap' >
    //         <Tooltip title="更多操作">
    //             <IconButton onClick={() => onOperationClicked()}>
    //                 <MoreVert />
    //             </IconButton>
    //         </Tooltip>
    //     </Box>
    const title =
        <Grid container alignContent={'center'}>
            <Grid item mr={2}>
                {fileName}
            </Grid>
            <Grid item>
                {sharedContent}
            </Grid>
        </Grid>

    return (
        <>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    <FileOpen fontSize='large' />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                onClick={onOperationClicked}
                primary={title}
                secondary={
                    <Stack>
                        <Typography noWrap>
                            剩余{remainUse}次使用
                        </Typography>
                        <Typography noWrap>
                            {fileSize}
                        </Typography>
                        <Typography noWrap>
                            {fileTime}到期
                        </Typography>
                    </Stack>
                } />
        </>
    )
}


export default FileItem
