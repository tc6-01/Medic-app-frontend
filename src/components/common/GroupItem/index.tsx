import { Avatar, IconButton, ListItemAvatar, ListItemText, useTheme } from '@mui/material';
import { GroupItemProps } from "src/types/ComponentProps";



const GroupItem = ({ groupName, icon, description, onClick }: GroupItemProps) => {
    const theme = useTheme()
    return (
        <IconButton sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} onClick={onClick}>
            <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    {icon}
                </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ textAlign: 'start', fontSize: 20, fontWeight: 'bold' }} primary={groupName} secondary={description} />
        </IconButton>
    )
}


export default GroupItem
