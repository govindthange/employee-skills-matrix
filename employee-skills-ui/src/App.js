import logo from './logo.svg';
import './App.css';
import EmpDetails from './components/emp-details';
import FilterComponent from './components/filter-component';
import FileUploadComponent from './components/file-upload.component';

import { Container, Grid, Button } from '@mui/material';

function App() {
  const empDetails = {
    id: "1",
    name: "pravin"
  }
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} my={2}>
          {/* <Button variant="outlined">Upload CSV</Button> */}
          <FileUploadComponent></FileUploadComponent>
        </Grid>
        <Grid item xs={12} md={6}>
          <FilterComponent></FilterComponent>
        </Grid>
        <Grid item xs={12} md={12}>
          <EmpDetails {...empDetails} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
