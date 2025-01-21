import { Button, TextField, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const[form,setForm]=useState({   //the const[form,setForm] is called array destructure in javascript
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capvalue(){
    console.log(form);
    axios.post('http://localhost:7000/user/login',form).then((res)=>{
      // console.log(res);
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token);
        navigate('/blogs');
      }
      else{
          navigate('/');
      }
      
    }).catch((error)=>{
      alert(error.response.data.message);
    })
  }
  return (
    <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'80vh'
    }}>
        <Typography variant='h4' style={{color:"purple"}}>BlogApp Login</Typography><br /><br />
        <div>
        <TextField label='Email' variant='outlined' name='email' onChange={(e)=>{   /*here 'e' is the event */
          setForm({...form,email:e.target.value}) /*... is called sprint operator it is used to concatenate this with the array */
        }}></TextField><br /><br />
        </div>

        <div>
        <TextField label='Password' variant='outlined' name='password' onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}></TextField>
        </div>
        
        <br /><br />
        <Button color='secondary' variant='contained' style={{marginBottom:'20px'}} onClick={capvalue}>Login</Button> {/*capvalue is a function name we can change it according to the function name that we are defining in the above section  */}
        <div>
            <Link to={'/signup'} style={{textDecoration:'none',color:'purple'}}>New user?Please register here</Link> {/* to use this "Link" we need to install npm i react-router-dom*/}
        </div>
    </div>
  )
}

export default Login