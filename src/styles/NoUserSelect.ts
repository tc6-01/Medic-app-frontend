import { makeStyles } from "@material-ui/core";

export const noUserSelect = makeStyles({
    root: {
        '& > *': { userSelect: 'none' }
    }
})
