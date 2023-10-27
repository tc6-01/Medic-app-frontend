import { FileItemProps, PolicyItemProps } from "src/types/ComponentProps";
import { MoreVert } from "@material-ui/icons";
import { Book, FileOpen } from '@mui/icons-material';
import { Avatar, Box, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';



const PolicyItem = ({ name, createdTime, description, onDetailClick }: PolicyItemProps) => {
    const theme = useTheme();
    return (
        <>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    <Book fontSize='large' />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                onClick={onDetailClick}
                primary={name}
                secondary={
                    <Stack>
                        <Typography noWrap>
                            {description}
                        </Typography>
                        <Typography noWrap>
                            {createdTime}
                        </Typography>
                    </Stack>
                } />
        </>
    )
}


export default PolicyItem
