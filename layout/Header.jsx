import React, { useState } from 'react';
import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Logo from '../public/logo-long.svg'
import { SwipeableDrawer } from '@mui/material';

function Header({ width }) {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
};

  return (
    <header>
      <AppBar position="static" color="highlightBg">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            <Box sx={{
              maxWidth: { xs: 100, md: 120 },
              my: 2,
              mx:{xs: 2, md: 1}
            }}>
              <Image src={Logo} alt="AEI EDU" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{setDrawerState(true)}}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Button
                sx={{ my: 2, color: '#130D0E', display: 'block' }}
                href="#text-buttons"
              >
                Home
              </Button>
              <Button
                sx={{ my: 2, color: '#130D0E', display: 'block' }}
                href="#text-buttons"
              >
                Courses
              </Button>
              <Button
                sx={{ my: 2, color: '#130D0E', display: 'block' }}
                href="#text-buttons"
              >
                About
              </Button>
              <Button
                sx={{ my: 2, color: '#130D0E', display: 'block' }}
                href="#text-buttons"
              >
                Contact
              </Button>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
              <Button
                color="themeColor2"
                variant="outlined"
                sx={{ borderRadius: '50px', mr: 1, size: 'small' }}
                href="#text-buttons"
              >
                Login
              </Button>
              <Button
                color="themeColor2"
                variant="contained"
                sx={{ borderRadius: '50px' }}
                href="#text-buttons"
              >
                Register
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <SwipeableDrawer
        anchor='right'
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Register" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component="a" href="#simple-list">
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </header>
  )
}

export default Header