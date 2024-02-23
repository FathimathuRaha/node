import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{flexGrow:1}} align='left'>
                    Student App
                </Typography>
                <Button ><Link to='/' style={{color:"white",textDecoration:"none"}}>Add Student</Link>
                </Button>
                <Button ><Link to='/s' style={{color:"white",textDecoration:"none"}}>View Student</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar