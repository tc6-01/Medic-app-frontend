import { Delete } from '@mui/icons-material'
import { Divider, IconButton, List, ListItem, ListItemText } from "@mui/material"
const ItemAddList = () => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', border: '1px solid red', borderStyle: 'dashed' }} dense={true}>
            <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }>
                <ListItemText primary="是否可读" secondary="是" />
            </ListItem>
            <Divider />
            <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }>
                <ListItemText primary="可转发" secondary="否" />
            </ListItem>
            <Divider />
            <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            }>
                <ListItemText primary="可使用次数" secondary="无限制" />
            </ListItem>
        </List>
    )
}

export { ItemAddList }
