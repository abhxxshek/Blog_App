import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  function logoutToken(){
    // Remove the token from sessionStorage
      sessionStorage.removeItem('logintoken');
    // Redirect to the login page
      navigate('/');
  }

  return (
    <>
    {/* IF BOX TAG IS THERE NO NEED TO GIVE DIV */}
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:'purple'}}>
          
          <Typography style={{marginLeft:'0px'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
            <Link to={'/blogs'}> <Button style={{color:'white'}}>Home</Button></Link> 
          <Link to={'/addblogs'}><Button style={{color:'white'}}>Add Blog</Button></Link>
          <Link to={'/'}><Button style={{color:'white'}} onClick={logoutToken}>Log Out</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar