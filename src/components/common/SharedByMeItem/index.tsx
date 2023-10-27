import { SharedByMeItemProps } from "src/types/ComponentProps";
import { MoreVert } from "@material-ui/icons";
import { FileOpen } from '@mui/icons-material';
import { Avatar, Box, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';



const SharedByMeItem = ({ fileName, fileSize, fileTime, onOperationClicked }: SharedByMeItemProps) => {
    const theme = useTheme();
    const secondaryAction =
        <Box display={'flex'} flexWrap='nowrap' >
            <IconButton onClick={() => onOperationClicked()}>
                <MoreVert />
            </IconButton>
        </Box>
    return (
        <>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    <FileOpen fontSize='large' />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={fileName}
                secondary={
                    <Stack>
                        <Typography noWrap>
                            {fileSize}
                        </Typography>
                        <Typography noWrap>
                            {fileTime}
                        </Typography>
                    </Stack>
                } />
            {secondaryAction}
        </>
    )
}


export default SharedByMeItem
