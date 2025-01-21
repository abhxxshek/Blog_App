import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const AddBlog = () => {
  const[form,setForm]=useState({
    title:'',
    description:'',
    image:''
  })
  const navigate=useNavigate();
  const location=useLocation();//it is used to access the props passed with the navigate in the home page
  function capvalue(){
    if(location.state!=null){
      axiosInstance.put('http://localhost:7000/blog/updateblog/'+location.state.val._id,form).then((res)=>{
        alert(res.data.message);
        navigate('/blogs');
      }).catch((error)=>{
          alert("Blog update failed")
      })
    }
    else{
      console.log(form);
      axiosInstance.post('http://localhost:7000/blog/addblog',form).then((res)=>{
          alert(res.data.message);
          navigate('/blogs');
      }).catch((error)=>{
        alert("Blog add failed!");
      })
    }
  }

  useEffect(()=>{
      if(location.state!=null){
        setForm({...form,title:location.state.val.title,  //here val is a variable passed from the update_data function in home.jsx, we can change it accordingly
          description:location.state.val.description,
          image:location.state.val.image
        })
      }
      else{
        setForm({...form,title:'',
          description:'',
          image:''
      })
  }},[])
  return (
    <div>
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'80vh',
        
        
    }}>
        <Typography variant='h4' style={{color:"purple"}}>ADD BLOGS</Typography><br /><br />
        <div>
        <TextField label='Title' name='title' value={form.title} style={{ width: '900px' }} onChange={(e)=>{
            setForm({...form,title:e.target.value})
        }}></TextField><br /><br />
        </div>

        <div>
        <TextField label='Description' name='description' value={form.description} style={{ width: '900px' }} multiline rows={4} onChange={(e)=>{
          setForm({...form,description:e.target.value} )
        }}></TextField><br /><br />
        </div>
        <div>
        <TextField label='Image url' name='image' value={form.image} style={{ width: '900px' }} onChange={(e)=>{
          setForm({...form,image:e.target.value})
        }}></TextField>
        </div>
        
        <br /><br />
        <Button color='secondary' variant='contained' style={{marginBottom:'20px'}} onClick={capvalue}>ADD BLOG</Button>
        
    </div>
    </div>
  )
}

export default AddBlog