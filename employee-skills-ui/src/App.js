import './App.css';
import Navbar from './components/nav-bar/Navbar'
import { Container, Grid, ThemeProvider, CssBaseline} from '@mui/material';
import { useSelector } from 'react-redux';
import {  LIGHT_THEME } from './redux/theme/themeConstants';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EmployeeDetailContainer from './components/employee-detail/EmployeeDetailContainer';
import React from 'react';
import { getThemeObj } from './utils/utils';
import AgGrid from './components/empoyee-skills-table/agGrid';


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
        </Grid>
      </Container>
      </Container>
     
      
    </ThemeProvider>

  );
}



export default App;
