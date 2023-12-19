import { useRoutes } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { useStore } from 'reto';
import { TopSnackBar } from 'src/components/common/TopSnackBar';
import { SnackBarStore } from 'src/states/global/TopSnackBarStore';
import ThemeProvider from 'src/theme/ThemeProvider';
import BottomPopDrawer from './components/common/BottomPopDrawer';
import createRoutes from './router';
import { BottomDrawerStore } from './states/global/BottomDrawerStore';


function App() {
  const ourMediaQuery = useMediaQuery('(max-width:2000px)');
  const content = useRoutes(createRoutes(ourMediaQuery));
  const snackBarStates = useStore(SnackBarStore);
  const bottomDrawerStates = useStore(BottomDrawerStore);
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <TopSnackBar
          open={snackBarStates.snackBarOpen}
          onClose={() => snackBarStates.setSnackBarOpen(false)}
          closeDuration={5000}
          message={snackBarStates.snackBarMessage}
          type={snackBarStates.snackBarType}
        />
        <BottomPopDrawer
          open={bottomDrawerStates.bottomDrawerOpen}
          onOpen={() => bottomDrawerStates.setBottomDrawerOpen(true)}
          onClose={() => bottomDrawerStates.setBottomDrawerOpen(false)}
        >
          {bottomDrawerStates.bottomDrawerContent}
        </BottomPopDrawer>
        {content}
      </LocalizationProvider>
    </ThemeProvider >
  );
}
export default App;
