import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeSelector from './theme-selector/ThemeSelector';


function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: 'center', padding: '15px' } }}
          >
            Winsoft Technologies
          </Typography>
          <ThemeSelector/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar