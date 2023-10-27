import { FileItemProps } from "src/types/ComponentProps";
import { makeStyles } from '@material-ui/core';
import { MoreVert } from "@material-ui/icons";
import { FileOpen } from '@mui/icons-material';
import { Avatar, ListItemAvatar, ListItemSecondaryAction, ListItemText, Stack, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Loading from "../LoadingProgress";


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


const LoadingFileItem = ({ fileName, fileSize, fileTime, sharedContent, onOperationClicked }: FileItemProps) => {
    const center = centerStyle();
    const theme = useTheme();
    const secondaryAction =
        <Stack direction={'row'}>
            {sharedContent}
            <IconButton onClick={() => onOperationClicked()}>
                <MoreVert />
            </IconButton>
        </Stack>
    return (
        <>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    <FileOpen fontSize='large' />
                </Avatar>
            </ListItemAvatar>
            <Loading loading={false} children={""} />
            <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        </>
    )
}

export default LoadingFileItem
