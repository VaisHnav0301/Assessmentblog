import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './styl.css'

const Dashboard = () => {
  return (
    <div>
       <AppBar position="static" color='success'>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            </IconButton>
          <Typography marginLeft={23} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          <Button color="primary" variant='contained' >
            <Link to={'/'} className='vg'>Home</Link></Button>
          &nbsp; &nbsp;
            <Button color='primary' variant='contained'>
                <Link to={'/create'} className='vg'>Add Blog links</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Dashboard
