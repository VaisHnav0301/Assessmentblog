import React from 'react'
import { Button, Grid, Paper, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './styl.css'

const Addblog = () => {
    const { register, handleSubmit} = useForm();
    const createCourse=(val) => {
        alert('form submitted');
        axios.post("http://localhost:5000/course/create",val).then((res)=>{
          alert(`Course Successfully Created`);
        })
      }
      const paperStyle={padding:20,height:'40vh',width:280,margin:"20p"}
  return (
<html>
   <body>
    <div>

      <Stack
      
      component="form"
      sx={{
        marginTop:'200px',
        marginLeft:'860px',
        width: '25ch',
      }}
      spacing={5}
      noValidate
      autoComplete="off"
    >
    
    <Grid className='App'>
          <Paper elevation={15} style={paperStyle} className='col'>

          
       <h2>BLOG FORM</h2>
       <br></br>
       
      <TextField 
      name='userId'
      {...register('userId')}
        label = "Blog Name"
        variant="outlined"
      />
      <br></br>
      <br></br>
      

      <TextField 
        name='courseDesc'
        {...register('courseDesc')}
        label ="Description"
        variant="outlined"
      />
      <br></br>
      <br></br>


      <TextField
        name='courseDuration'
        {...register('courseDuration')}
        variant="outlined"
        label ="Author Name"
        
        
      />
      <br></br>
      <br></br>
      <br></br>

      
      <Button variant='contained'>Add Blog</Button>
      </Paper>
      </Grid>
    </Stack>
    
    </div>
    </body>
    </html>
  )
}

export default Addblog
