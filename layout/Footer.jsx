import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../public/logo-long.svg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';

import Link from 'next/link'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function Footer() {

  const FooterLink = (props) => {
    return(
      <Link href={props.href} passHref>
        <Typography variant="subtitle2" sx={{ display:'block' }} gutterBottom component="a">{props.children}</Typography>
      </Link>
    )
  }

  return (
    <footer>
      <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={3}>

          <Box sx={{ maxWidth: { xs: 150, md: 150 }, my:2 }}>
            <Image src={Logo} alt="AEI EDU" />
          </Box>
          <Typography sx={{display:'block'}} variant="subtitle2" gutterBottom component="a">lorem ipsum dolor lorem ipsum</Typography>
          <Typography sx={{display:'block'}} variant="subtitle2" gutterBottom component="a">Call Us : +947x-xxxxxxx</Typography>

          <Box sx={{display:'flex'}}>
            <IconButton href="?facebook">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton href="?twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton href="?instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="?youtube">
              <YouTubeIcon />
            </IconButton>
          </Box>
          
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{mt: 2}}>Take a Tour</Typography>
          <Box sx={{mt: {xs: 2, sm: 2, lg: 6, xl: 6,} }}>
            <FooterLink href="/hi">Courses</FooterLink>
            <FooterLink href="/hi">Support</FooterLink>
            <FooterLink href="/hi">Shop</FooterLink>
            <FooterLink href="/hi">Features</FooterLink>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{mt: 2}}>Our Company</Typography>
          <Box sx={{mt: {xs: 2, sm: 2, lg: 6, xl: 6,} }}>
            <FooterLink href="/hi">About us</FooterLink>
            <FooterLink href="/hi">Contact us</FooterLink>
            <FooterLink href="/hi">Blog</FooterLink>
            <FooterLink href="/hi">Media</FooterLink>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" sx={{mt: 2}}>My Account</Typography>
          <Box sx={{mt: {xs: 2, sm: 2, lg: 6, xl: 6,} }}>
            <FooterLink href="/hi">Profile</FooterLink>
            <FooterLink href="/hi">Cart</FooterLink>
            <FooterLink href="/hi">Checkout</FooterLink>
            <FooterLink href="/hi">Login</FooterLink>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" sx={{mt: 2}}>Subscribe</Typography>
          <Box sx={{mt: {xs: 2, sm: 2, lg: 5, xl: 5,}}}>
            <Typography variant="subtitle2" gutterBottom component="a">lorem ipsum dolor lorem ipsum</Typography>

            <Box sx={{ display:'flex', alignItems: 'center', mt: 3 }}>
              <TextField id="input-with-sx" label="Email Address" />
              <Box>
                <IconButton sx={{width: 'fit-content'}}><SendIcon /></IconButton>
              </Box>
            </Box>
 
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Typography sx={{ textAlign: 'center', mt: 8, mb:5 }} variant="h6">Copyright © 2022 Aei.edu.lk</Typography>
      </Box></Container>
    </footer>
  )
}

export default Footer