import { Avatar, IconButton, ListItemAvatar, ListItemText, Stack, useTheme } from '@mui/material';
import { ProgressProps } from "src/types/ComponentProps";



const ProgressItem = ({ progressItemName, icon}: ProgressProps) => {
    const theme = useTheme()
    return (
        <>
            {/* <ListItemAvatar>
                <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
                    <FileOpen fontSize='large' />
                </Avatar>
            </ListItemAvatar> */}
           
        </>
    )
}


export default ProgressItem
