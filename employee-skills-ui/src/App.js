import logo from './logo.svg';
import './App.css';
import EmpDetails from './components/emp-details';
import FilterComponent from './components/filter-component';
import Navbar from './components/Navbar'
import AgGrid from './agGrid'
import FileUploadComponent from './components/file-upload.component';
import { Container, Grid, Button, ThemeProvider, createTheme, CssBaseline, Fab, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { LIGHT_THEME } from './redux/theme/themeConstants';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const empDetails = {
    id: "1",
    name: "pravin"
  }

  // const [selectedtheme, updateSelectedTheme] = useState(lightTheme);
  const actions = [
    { icon: <FileUploadIcon />, name: 'Upload CSV' },
    { icon: <SaveIcon />, name: 'Download' },
    // { icon: <PrintIcon />, name: 'Print' },
    // { icon: <ShareIcon />, name: 'Share' },
  ];


  const theme = useSelector(state => state.theme.theme);
  const t = (theme === LIGHT_THEME) ? lightTheme : darkTheme;
  return (

    <ThemeProvider theme={t}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
      
        <Grid container spacing={2}>
          {/* <Grid item xs={12} md={6} my={2}>
            <FileUploadComponent></FileUploadComponent>
          </Grid> */}
          <Grid item xs={12} md={12} >
            <AgGrid />
          </Grid>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
          {/* <Grid container
            direction="row"
            justifyContent="flex-end"
            alignItems="center">
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid> */}
        </Grid>
      </Container>
    </ThemeProvider>

  );
}

export default App;
