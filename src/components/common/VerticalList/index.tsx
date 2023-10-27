import { createStyles, makeStyles } from '@material-ui/core';
import { List, ListItem, Theme } from '@mui/material';
import { VerticalListProps } from "src/types/ComponentProps";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            justifyContent: 'start',
            userSelect: 'none',
        },
    }),
);



const VerticalList = ({ items, onItemClicked }: VerticalListProps) => {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.root} aria-label="contacts" >
            {items?.map((item, index) =>
                <ListItem alignItems="center" key={index} onClick={() => onItemClicked ? onItemClicked(index) : null}>
                    {item}
                </ListItem>
            )}
        </List>
    )
}


export default VerticalList
