import { ProgressProps, SharedFileItemData } from "src/types/ComponentProps";
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { Typography, Grid, ButtonBase, IconButton, Avatar, ListItemAvatar, ListItemText, Box } from '@mui/material';
import { FileOpen } from '@mui/icons-material';
import DeleteIcon from '@material-ui/icons/Delete';
import ProgressItem from "../../common/ProgressItem"
import DescriptionIcon from '@material-ui/icons/Description';
import { useTheme } from '@mui/material/styles';
import { Stack } from "@mui/system";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="h4" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: theme.spacing(2),
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  test: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}),);



function Progress() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  // const [ProgressItems,setProgressItems] = useState<ProgressProps[]>([{
  //   ProgressItemName:'患者3-病例.pdf',
  //   icon: <Group />
  //  },
  //  ])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const theme = useTheme()
  const secondaryAction =
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  return (
    <Grid container justifyContent={'space-between'}>
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: theme.colors.primary.light }}>
          <DescriptionIcon fontSize='large' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={
        <Stack spacing={2}>
          <ListItemText primary={"患者3-病例.pdf"} />
          <LinearProgressWithLabel variant="determinate" value={progress} />
        </Stack>
      } />
      {secondaryAction}
    </Grid>
  )
}


// const Progress = ({ value }: ProgressProps) => {
//     return
// }

export default Progress;
