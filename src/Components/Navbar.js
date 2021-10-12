import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ width: '80%', maxWidth: '1800px', margin: '0 auto', height: '80px' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600, }}>
            HDB-PROPS
          </Typography>
          <Button color="inherit"><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to='/search' style={{textDecoration: 'none', color: 'inherit'}}>Search</Link></Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}