import './App.css';
import Navbar from './components/nav-bar/Navbar'
import AgGrid from './agGrid'
import { Container, Grid, ThemeProvider, CssBaseline, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { useSelector } from 'react-redux';
import {  LIGHT_THEME } from './redux/theme/themeConstants';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EmployeeDetailContainer from './components/employee-detail/EmployeeDetailContainer';
import React from 'react';
import { getThemeObj } from './utils/utils';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AgGrid />,
  },
  {
    path:"/employee-details",
    element: <EmployeeDetailContainer />
  }
]);


function App(props) {
  const actions = [
    { icon: <FileUploadIcon />, name: 'Upload CSV' },
    { icon: <SaveIcon />, name: 'Download' },
  ];


  const mode = useSelector(state => state.theme.mode);
  const t = (mode === LIGHT_THEME) ? 'light' : 'dark';

  const themeColor = useSelector(state => state.theme.theme);
  const derivedTheme = getThemeObj(themeColor.primaryColor, themeColor.secondaryColor, t)
  return (

    <ThemeProvider theme={derivedTheme}>
      <CssBaseline />
      <Container maxWidth={false}  disableGutters={true}>
      <Navbar />
      <Container maxWidth={false} sx={{ pr: 20}}>

        <Grid container spacing={2} >
          <Grid item xs={12} md={12}>
          <RouterProvider router={router} />
          </Grid>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16,'& .MuiFab-primary': { backgroundColor: 'secondary.main' } }}
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
          <input
    type="file"
    hidden
  />
        </Grid>
      </Container>
      </Container>
     
      
    </ThemeProvider>

  );
}



export default App;
