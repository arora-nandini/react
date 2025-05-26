import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
// import './App.css'

import {  Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import Details from './Details'
import UserList from './UserList'
import UserDetails from './UserDetails'
function App() {
 

  return (
    <>
 { /*  <NavBar/> */}

   <Routes>
<Route element= {<NavBar/>}>
<Route path="/"  element={<Home />} />
<Route path="/Users/List?"element={<UserList/>}/>


<Route path='/users/:id'element={<UserDetails/>}/>
<Route path='in'>

<Route path='/in/user'>
<Route path="/in/user/About"  element={<About/>} />

<Route path="/in/user/Login"  element={<Login/>}/>

</Route>
</Route>


</Route>


<Route path="/College"  element={<College/>}>
<Route index element={<Student/>}/>
<Route path="Department" element={<Department/>}/>
<Route path="Details" element={<Details/>}/>
</Route>
{/*
<Route path="/*"  element={<PageNotFound/>}/>
*/}
<Route path="/*"  element={<Navigate  to="/"/>}/>
   
   </Routes>
    </>
  )
}

export default App
