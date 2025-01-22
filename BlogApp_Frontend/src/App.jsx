import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import AddBlog from './components/AddBlog'
import Navbar from './components/Navbar'
import Main from './components/main'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <div>
      
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route element={<PrivateRoutes/>}>
          <Route path='/blogs' element={<Main child={<Home/>}/>}></Route>
          <Route path='/addblogs' element={<Main child={<AddBlog/>}/>}></Route>
          </Route>
      </Routes>
    

    </div>
  )
}

export default App