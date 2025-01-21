
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  })
const navigate=useNavigate();
  function capvalue(){
    console.log(form);
    axios.post('http://localhost:7000/user/adduser',form).then((res)=>{
      alert(res.data.message);
      navigate('/blogs');
    }).catch((error)=>{
      alert("Registration failed !")
    })
  }
  return (
    <div>
        <h2>SIGN UP</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6}}>
          <TextField fullWidth label='Name' variant='outlined' name='name' onChange={(e)=>{
            setForm({...form,name:e.target.value})
          }}></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Email' variant='outlined' name='email' onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Password' variant='outlined' name='password' onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}></TextField>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
        <TextField fullWidth label='Phone' variant='outlined' name='phone' onChange={(e)=>{
          setForm({...form,phone:e.target.value})
        }}></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12}}>
        <TextField fullWidth label='Address' variant='outlined' multiline rows={4} name='address' onChange={(e)=>{
          setForm({...form,address:e.target.value})
        }}></TextField>
        </Grid>
        <Button color='secondary' variant='contained' onClick={capvalue}>REGISTER</Button><br /><br />
      </Grid>
      <div>
        <Link to={'/'} style={{textDecoration:'none'}}>Already registered?Login here</Link>
      </div>
    
    </div>
  )
}

export default Signup