import { Avatar, IconButton, ListItemAvatar, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import { SharedItemProps } from "src/types/ComponentProps";



const SharedItem = ({ number, icon, description }: SharedItemProps) => {
    const theme = useTheme()
    return (
        <IconButton sx={{ width: '100%', display: 'flex', justifyContent: 'left' }}>
            <ListItemAvatar sx={{ flex: 0 }}>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    {icon}
                </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ flex: 0 }}
                primary={description}
                secondary={number} />
        </IconButton>
    )
}


export default SharedItem
