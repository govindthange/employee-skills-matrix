import logo from './logo.svg';
import './App.css';
import EmpDetails from './components/emp-details';
import FilterComponent from './components/filter-component';
import Navbar from './components/Navbar'
import AgGrid from './agGrid'
import FileUploadComponent from './components/file-upload.component';
import { Container, Grid, Button, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Provider, useSelector } from 'react-redux';
import store from './redux/theme/store';
import { LIGHT_THEME } from './redux/theme/themeConstants';
import { useState } from 'react';

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

  const theme = useSelector(state => state.theme);
  const t = (theme === LIGHT_THEME) ? lightTheme : darkTheme;
  return (
   
    <ThemeProvider theme={t}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} my={2}>
            <FileUploadComponent></FileUploadComponent>
          </Grid>
          <Grid item xs={12} md={12}>
            <AgGrid />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>

  );
}

export default App;
